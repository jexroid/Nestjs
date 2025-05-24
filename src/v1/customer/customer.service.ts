import { Injectable } from "@nestjs/common";
import * as moment from "moment";
import { between, count, sql } from "drizzle-orm";

import CRUDService from "../lib/crud/crud.service";

import { customers, invoices } from "@/lib/model";

type TimePeriod = "week" | "month" | "year";

@Injectable()
export class CustomerService extends CRUDService {
  constructor() {
    super(customers);
  }

  async summary(period: TimePeriod = "month") {
    const currentDate = moment();
    let startDate: Date;
    let endDate: Date;

    switch (period) {
      case "week":
        startDate = currentDate.clone().startOf("week").toDate();
        endDate = currentDate.clone().endOf("week").toDate();
        break;
      case "month":
        startDate = currentDate.clone().startOf("month").toDate();
        endDate = currentDate.clone().endOf("month").toDate();
        break;
      case "year":
        startDate = currentDate.clone().startOf("year").toDate();
        endDate = currentDate.clone().endOf("year").toDate();
        break;
    }

    return await this.db.transaction(async (tx) => {
      // 1. Total Customers (no removed/enabled filter)
      const totalCustomersResult = await tx
        .select({ count: count() })
        .from(customers);

      // 2. New Customers in period (no removed/enabled filter)
      const newCustomersResult = await tx
        .select({ count: count() })
        .from(customers)
        // @ts-ignore
        .where(between(customers.created, startDate, endDate));

      // 3. Active Customers (have at least one non-removed invoice)
      // Since invoices table has removed field but customers doesn't
      const activeCustomersResult = await tx
        .select({
          count: sql<number>`count(distinct ${invoices.customerId})`.as(
            "count"
          ),
        })
        .from(invoices);

      const totalCustomers = totalCustomersResult[0]?.count || 0;
      const newCustomers = newCustomersResult[0]?.count || 0;
      const activeCustomers = activeCustomersResult[0]?.count || 0;

      return {
        new:
          totalCustomers > 0 ? Math.round((newCustomers / totalCustomers) * 100) : 0,
        active:
          totalCustomers > 0
            ? Math.round((activeCustomers / totalCustomers) * 100)
            : 0,
      };
    });
  }
}

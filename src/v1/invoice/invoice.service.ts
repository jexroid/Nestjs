import { Injectable } from "@nestjs/common";
import { between, count, eq, sql } from "drizzle-orm";
import * as moment from "moment";

import CRUDService from "../lib/crud/crud.service";

import { CreateInvoiceDto } from "./dto/create-invoice.dto";

import { customers, invoices } from "@/lib/model";

type TimePeriod = "week" | "month" | "year";

@Injectable()
export class InvoiceService extends CRUDService {
  constructor() {
    super(invoices);
  }

  async _read(query: number) {
    const record = await this.db.query.invoices.findFirst({
      where: eq(invoices.id, BigInt(query)),
      with: {
        customers: true,
      },
    });

    if (!record)
      return {
        success: false,
        result: null,
        message: "document was not found",
      };

    return {
      success: true,
      result: { ...record, id: Number(record.id) },
      message: "document was found Successfully",
    };
  }
  async create(createInvoiceDto: CreateInvoiceDto) {
    const data = {
      ...createInvoiceDto,
      submittedby: "karami",
    };
    console.log(data);
    const insert = await this.db
    .insert(invoices)
    // @ts-ignore
      .values(data)
      .returning({ id: invoices.id });
    return Number(insert[0].id);

    // {
    //   total: 222222,
    //   expiredDate: createInvoiceDto.expiredDate,
    //   trnnumber: createInvoiceDto.trnnumber,
    //   date: createInvoiceDto.date,
    //   driverId: createInvoiceDto.driver,
    //   submittedby: "karami",
    //   usevat: createInvoiceDto.usevat,
    //   status: createInvoiceDto.status,
    //   customerId: createInvoiceDto.customer,
    //   taxDiscount: createInvoiceDto.taxDiscount,
    //   address: createInvoiceDto.address,
    //   workshop: createInvoiceDto.customer,

    // }
  }

  async summery(period: TimePeriod = "month") {
    const currentDate = moment();
    let startDate: Date;
    let endDate: Date;

    // Set date range using Moment.js
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
      // 1. Total clients (no removed/enabled filter)
      const totalClientsResult = await tx
        .select({ count: count() })
        .from(customers);

      // 2. New clients in period (no removed/enabled filter)
      const newClientsResult = await tx
        .select({ count: count() })
        .from(customers)
        // @ts-ignore
        .where(between(customers.created, startDate, endDate));

      // 3. Active clients (have at least one non-removed invoice)
      // Since invoices table has removed field but customers doesn't
      const activeClientsResult = await tx
        .select({
          count: sql<number>`count(distinct ${invoices.customerId})`.as(
            "count"
          ),
        })
        .from(invoices);

      const totalClients = totalClientsResult[0]?.count || 0;
      const newClients = newClientsResult[0]?.count || 0;
      const activeClients = activeClientsResult[0]?.count || 0;

      return {
        new:
          totalClients > 0 ? Math.round((newClients / totalClients) * 100) : 0,
        active:
          totalClients > 0
            ? Math.round((activeClients / totalClients) * 100)
            : 0,
      };
    });
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}

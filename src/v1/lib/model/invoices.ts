import {
  foreignKey,
  bigserial,
  date,
  text,
  boolean,
  bigint,
  varchar,
  timestamp,
  numeric,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import { customers } from "./customers";
import { karami } from "./schema.controller";
import { items } from "./items";
import { driver } from "./drivers";

export const invoices = karami.table(
  "invoices",
  {
    id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
    date: date().defaultNow(),
    expiredDate: date().notNull(),
    datePaid: date(),
    status: varchar({ length: 10 }).notNull(),
    workshop: varchar({ length: 50 }).notNull(),
    customerId: bigint({ mode: "bigint" }),
    address: text().notNull(),
    trnnumber: varchar({ length: 40 }),
    usevat: boolean().notNull(),
    paid: boolean().notNull().default(false),
    delivered: boolean().notNull().default(false),
    discount: bigint({ mode: "bigint" }),
    taxDiscount: boolean().notNull(),
    driverId: bigint({ mode: "bigint" }),
    submittedby: varchar({ length: 50 }).notNull(),
    pdf: varchar({ length: 40 }),
    total: numeric({ mode: "bigint" }),
    created: timestamp({ withTimezone: true, mode: "string" }).defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.customerId],
      foreignColumns: [customers.id],
      name: "fk_invoices_customer",
    }).onDelete("set null"),
    foreignKey({
      columns: [table.driverId],
      foreignColumns: [driver.id],
      name: "fk_invoices_driver",
    }).onDelete("set null"),
  ]
);

export const invoiceRelations = relations(invoices, ({ one }) => ({
  driver: one(driver, {
    fields: [invoices.driverId],
    references: [driver.id],
  }),
}));

export const customerRelations = relations(invoices, ({ one, many }) => ({
  customers: one(customers, {
    fields: [invoices.customerId],
    references: [customers.id],
  }),
  items: many(items),
}));

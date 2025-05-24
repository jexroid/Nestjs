
import { relations } from "drizzle-orm";
import {
  bigserial,
  text,
  varchar,
  unique,
  timestamp,
} from "drizzle-orm/pg-core";

import { karami } from "./schema.controller";
import { invoices } from "./invoices";


export const customers = karami.table(
  "customers",
  {
    id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
    name: text().notNull(),
    sex: text().notNull(),
    phone: varchar({ length: 25 }).notNull(),
    address: text().notNull(),
    trnnumber: text().notNull(),
    email: text().notNull(),
    created: timestamp({ withTimezone: true, mode: "string" }).defaultNow(),
  },
  (table) => [unique("unique_phone").on(table.phone)]
);

export const customersRelations = relations(customers, ({ many }) => ({
  invoicess: many(invoices),
}));

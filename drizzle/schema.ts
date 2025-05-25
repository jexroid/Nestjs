import {
  pgTable,
  pgSchema,
  foreignKey,
  bigserial,
  date,
  text,
  boolean,
  bigint,
  varchar,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const karami = pgSchema("karami");

export const invoices = karami.table(
  "invoices",
  {
    id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
    datepaid: date().notNull(),
    workshop: text().notNull(),
    username: text().notNull(),
    sex: text().notNull(),
    phone: text().notNull(),
    address: text().notNull(),
    trnnumber: text().notNull(),
    usevat: boolean().notNull(),
    paid: boolean().notNull(),
    delivered: boolean().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discount: bigint({ mode: "number" }).notNull(),
    taxDiscount: boolean().notNull(),
    deliveredby: text().notNull(),
    submittedby: text().notNull(),
    pdf: varchar({ length: 40 }),
    timestamp: timestamp({ withTimezone: true, mode: "string" }),
  },
  (table) => [
    foreignKey({
      columns: [table.phone],
      foreignColumns: [customers.phone],
      name: "fk_invoices_customer",
    }).onDelete("set null"),
  ]
);

export const log = karami.table("log", {
  id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
  department: text().notNull(),
  submittedby: text().notNull(),
  date: timestamp({ withTimezone: true, mode: "string" }).notNull(),
  os: text().notNull(),
  browser: text().notNull(),
  ip: text().notNull(),
  value1: text().notNull(),
  value2: text().notNull(),
  value3: text().notNull(),
  value4: text().notNull(),
  value5: text().notNull(),
  value6: text().notNull(),
  value7: text().notNull(),
  value8: text().notNull(),
  value9: text().notNull(),
  value10: text().notNull(),
});

export const otherinvoices = karami.table("otherinvoices", {
  id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
  date: date().notNull(),
  drivername: text().notNull(),
  urlinvoice: text().notNull(),
  disable: text().notNull(),
  submittedby: text().notNull(),
});

export const otheritems = karami.table("otheritems", {
  id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  invoiceid: bigint({ mode: "number" }).notNull(),
  name: text().notNull(),
  price: text().notNull(),
  quantity: text().notNull(),
  description: text().notNull(),
});

export const settings = karami.table("settings", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  warningdaysinvoice: bigint({ mode: "number" }).notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  dangerdaysinvoice: bigint({ mode: "number" }).notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  numpageinvoices: bigint({ mode: "number" }).notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  numpagecustomer: bigint({ mode: "number" }).notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  numpagelogs: bigint({ mode: "number" }).notNull(),
});

export const users = karami.table("users", {
  id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  role: bigint({ mode: "number" }).notNull(),
  username: text().notNull(),
  password: text().notNull(),
  urlprofile: text().notNull(),
});

export const items = karami.table(
  "items",
  {
    id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    invoiceid: bigint({ mode: "number" }).notNull(),
    name: text().notNull(),
    price: text().notNull(),
    quantity: text().notNull(),
    description: text().notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.invoiceid],
      foreignColumns: [invoices.id],
      name: "fk_items_invoice",
    }).onDelete("set null"),
  ]
);

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
  },
  (table) => [unique("unique_phone").on(table.phone)]
);

export const taxes = karami.table("taxes", {});

import { bigint } from "drizzle-orm/pg-core";
import { karami } from "./schema.controller";


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

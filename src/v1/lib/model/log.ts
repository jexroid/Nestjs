import { bigserial, text, timestamp } from "drizzle-orm/pg-core";

import { karami } from "./schema.controller";

export const log = karami.table("log", {
  id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
  department: text().notNull(),
  submittedby: text().notNull(),
  date: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
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
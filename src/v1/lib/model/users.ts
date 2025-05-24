
import {
  bigserial,
  text,
  bigint,
} from "drizzle-orm/pg-core";

import { karami } from "./schema.controller";


export const users = karami.table("users", {
  id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  role: bigint({ mode: "number" }).notNull(),
  username: text().notNull(),
  password: text().notNull(),
  urlprofile: text().notNull(),
});
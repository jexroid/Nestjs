import { bigserial, varchar } from "drizzle-orm/pg-core";
import { karami } from "./schema.controller";
import { relations } from "drizzle-orm";
import { invoices } from "./invoices";


export const driver = karami.table("driver", {
  id: bigserial({ mode: 'bigint' }).primaryKey().notNull(),
  name: varchar({ length: 100 }).notNull(),
  phone: varchar({ length: 25 }).notNull(),
  
});

export const driverRelations = relations(driver, ({ many }) => ({
  invoices: many(invoices),
}));

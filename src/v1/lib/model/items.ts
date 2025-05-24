import {
  foreignKey,
  bigserial,
  text,
  bigint,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import { karami } from "./schema.controller";
import { invoices } from "./invoices";

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

export const itemsRelations = relations(items, ({ one }) => ({
  invoices: one(invoices, {
    fields: [items.invoiceid],
    references: [invoices.id],
  }),
}));
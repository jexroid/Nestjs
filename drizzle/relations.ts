import { relations } from "drizzle-orm/relations";
import { customers, invoices, items } from "./schema";

export const invoicesRelations = relations(invoices, ({one, many}) => ({
	customers: one(customers, {
		fields: [invoices.phone],
		references: [customers.phone]
	}),
	itemss: many(items),
}));

export const customersRelations = relations(customers, ({many}) => ({
	invoicess: many(invoices),
}));

export const itemsRelations = relations(items, ({one}) => ({
	invoices: one(invoices, {
		fields: [items.invoiceid],
		references: [invoices.id]
	}),
}));
-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
CREATE SCHEMA "karami";
--> statement-breakpoint
CREATE TABLE "karami"."invoices" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"datepaid" date NOT NULL,
	"workshop" text NOT NULL,
	"username" text NOT NULL,
	"sex" text NOT NULL,
	"phone" text NOT NULL,
	"address" text NOT NULL,
	"trnnumber" text NOT NULL,
	"usevat" boolean NOT NULL,
	"paid" boolean NOT NULL,
	"delivered" boolean NOT NULL,
	"discount" bigint NOT NULL,
	"taxDiscount" boolean NOT NULL,
	"deliveredby" text NOT NULL,
	"submittedby" text NOT NULL,
	"pdf" varchar(40),
	"timestamp" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "karami"."log" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"department" text NOT NULL,
	"submittedby" text NOT NULL,
	"date" timestamp with time zone NOT NULL,
	"os" text NOT NULL,
	"browser" text NOT NULL,
	"ip" text NOT NULL,
	"value1" text NOT NULL,
	"value2" text NOT NULL,
	"value3" text NOT NULL,
	"value4" text NOT NULL,
	"value5" text NOT NULL,
	"value6" text NOT NULL,
	"value7" text NOT NULL,
	"value8" text NOT NULL,
	"value9" text NOT NULL,
	"value10" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "karami"."otherinvoices" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"drivername" text NOT NULL,
	"urlinvoice" text NOT NULL,
	"disable" text NOT NULL,
	"submittedby" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "karami"."otheritems" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"invoiceid" bigint NOT NULL,
	"name" text NOT NULL,
	"price" text NOT NULL,
	"quantity" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "karami"."settings" (
	"warningdaysinvoice" bigint NOT NULL,
	"dangerdaysinvoice" bigint NOT NULL,
	"numpageinvoices" bigint NOT NULL,
	"numpagecustomer" bigint NOT NULL,
	"numpagelogs" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE "karami"."users" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"role" bigint NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"urlprofile" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "karami"."items" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"invoiceid" bigint NOT NULL,
	"name" text NOT NULL,
	"price" text NOT NULL,
	"quantity" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "karami"."customers" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"sex" text NOT NULL,
	"phone" varchar(25) NOT NULL,
	"address" text NOT NULL,
	"trnnumber" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "unique_phone" UNIQUE("phone")
);
--> statement-breakpoint
CREATE TABLE "karami"."taxes" (

);
--> statement-breakpoint
ALTER TABLE "karami"."invoices" ADD CONSTRAINT "fk_invoices_customer" FOREIGN KEY ("phone") REFERENCES "karami"."customers"("phone") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "karami"."items" ADD CONSTRAINT "fk_items_invoice" FOREIGN KEY ("invoiceid") REFERENCES "karami"."invoices"("id") ON DELETE set null ON UPDATE no action;
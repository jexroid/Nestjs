/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `lawyer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "lawyer_phone_key" ON "lawyer"("phone");

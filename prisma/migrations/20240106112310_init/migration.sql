-- CreateTable
CREATE TABLE "lawyer" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT,
    "phone" VARCHAR(12) NOT NULL,
    "password" TEXT NOT NULL,
    "verify" BOOLEAN NOT NULL DEFAULT false,
    "rank" INTEGER NOT NULL DEFAULT 0,
    "job_area" TEXT[],

    CONSTRAINT "lawyer_pkey" PRIMARY KEY ("id")
);

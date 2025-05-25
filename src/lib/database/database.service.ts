import "dotenv/config";

import { Injectable, OnModuleInit } from "@nestjs/common";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "$lib/model";

const pool = new Pool({
  connectionString:
    "postgresql://postgres:password@localhost:5432/karami?schema=karami",
});

@Injectable()
export class DrizzleService implements OnModuleInit {
  async onModuleInit() {
    await pool.connect();
  }

  static db = drizzle({ schema, client: pool });
}

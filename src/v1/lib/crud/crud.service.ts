import { asc, count, desc, eq, ilike } from "drizzle-orm";

import { DrizzleService } from "../database/database.service";

import { CRUDInterface, ListQuery, SearchQuery, TableWithId } from "./types";


export default class CRUDService implements CRUDInterface {
  protected db = DrizzleService.db
  private model: TableWithId;

  constructor(model: TableWithId) {
    this.model = model;
  }
  async read(query: number) {
    const record = await this.db
      .select()
      .from(this.model)
      .where(eq(this.model.id, BigInt(query)));

    if (!record)
      return {
        success: false,
        result: null,
        message: "no document found by this id",
      };

    const serializedRecord = record.map((record) => ({
      ...record,
      id: Number(record.id),
      driverId: Number(record.id),
    }));

    return {
      success: true,
      result: serializedRecord,
      message: "document was found Successfully",
    };
  }

  async list(query?: ListQuery) {
    const page = query.page || 1;
    const limit = parseInt(query.items) || 10;

    const NumberOfRecords = await this.db
      .select({ count: count() })
      .from(this.model)[0];
    const records = await this.db
      .select()
      .from(this.model)
      .orderBy(
        query.sort
          ? query.order === "asc"
            ? asc(this.model[query.sort])
            : desc(this.model[query.sort])
          : desc(this.model.id)
      )
      .limit(limit)
      .offset((page - 1) * limit)
      .execute();

    const serializedrecord = records.map((record) => ({
      ...record,
      id: Number(record.id),
      driverId: Number(record.id),
      discount: Number(record.discount),
    }));
      
    return {
      success: true,
      result: serializedrecord,
      pagination: {
        page: query.page,
        pages: 10,
        count: NumberOfRecords,
      },
      message: "Successfully found all documents",
    };
  }

  async search(query: SearchQuery) {
    console.log(query)
    const records = await this.db
      .select()
      .from(this.model)
      .where(ilike(this.model[query.fields!], `%${query?.q}%`))
      .limit(20);

    if (!records)
      return {
        success: false,
        result: [],
        message: "No document found by this request",
      };

    const serializedRecord = records.map((record) => ({
      ...record,
      id: Number(record.id),
      driverId: Number(record.id),
    }));

    return {
      success: true,
      result: serializedRecord,
      message: "all documents found Successfully",
    };
  }
}

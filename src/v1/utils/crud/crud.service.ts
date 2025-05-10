import { Prisma, PrismaClient } from "@prisma/client";

import { CRUDInterface, ListQuery, ReadQuery, SearchQuery } from "./types";

type ModelName = Prisma.ModelName;

export default class CRUDService<T extends ModelName> implements CRUDInterface {
  private prisma: PrismaClient;
  private model: T;

  constructor(prisma: PrismaClient, model: T) {
    this.prisma = prisma;
    this.model = model;
  }

  

  async read(query: ReadQuery) {
    const record = await this.prisma[this.model].findUnique({
      where: {
        id: query.id,
      },
    });

    if (!record)
      return {
        success: false,
        result: null,
        message: "no document found by this id",
      };

    return {
      success: true,
      result: record,
      message: "document was found Successfully",
    };
  }

  async list(query?: ListQuery) {
    const page = query.page || 1;
    const limit = parseInt(query.items) || 10;

    const NumberOfRecords = this.db[this.entity].count();
    const records = await this.db[this.entity].findMany({
      skip: (page - 1) * limit,
      orderBy: {
        [query.sort ?? "id"]: query.order ?? "desc",
      },
      take: 10,
    });

    const serializedInvoices = records.map((invoice) => ({
      ...invoice,
      id: Number(invoice.id),
      discount: Number(invoice.discount),
    }));

    return {
      success: true,
      result: serializedInvoices,
      pagination: {
        page: query.page,
        pages: 10,
        count: NumberOfRecords,
      },
      message: "Successfully found all documents",
    };
  }

  async search(query: SearchQuery) {
    const records = await this.db[this.entity].findMany({
      where: {
        [query.fields]: {
          contains: query?.q || "",
          mode: "insensitive",
        },
      },
    });

    if (!records)
      return {
        success: false,
        result: [],
        message: "No document found by this request",
      };

    return {
      success: true,
      result: records,
      message: "all documents found Successfully",
    };
  }
}

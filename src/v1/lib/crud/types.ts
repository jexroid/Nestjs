import type { PgColumn, PgTable } from "drizzle-orm/pg-core";

export type ListQuery = {
  page?: number;
  order?: "asc" | "desc";
  sort?: string;
  items?: string;
};

export type SearchQuery = { fields: string; q?: string };

type ResponseType = {
  success: boolean;
  result: Record<string, any>[] | Record<string, any>;
  message: string;
  [key: string]: any;
};

export interface CRUDInterface {
  read(query: number): Promise<ResponseType>;
  list(query: ListQuery): Promise<ResponseType>;
  search(query: SearchQuery): Promise<ResponseType>;
}

export interface TableWithId extends PgTable {
  id: PgColumn<
    {
      name: "id";
      tableName: string;
      dataType: "bigint";
      columnType: "PgBigSerial64";
      data: bigint;
      driverParam: string;
      notNull: true;
      hasDefault: true;
      isPrimaryKey: true;
      isAutoincrement: false;
      hasRuntimeDefault: false;
      enumValues: undefined;
      baseColumn: never;
      identity: undefined;
      generated: undefined;
    },
    object,
    object
  >;
}
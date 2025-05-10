export type ListQuery = {
  page?: number;
  order?: "asc" | "desc";
  sort?: string;
  items?: string;
};

export type SearchQuery = { fields: string; q?: string };

export type ReadQuery = { id: number };

type ResponseType = {
  success: boolean;
  result: Record<string, any>[] | Record<string, any>;
  message: string;
  [key: string]: any;
};

export interface CRUDInterface {
  read(query: ReadQuery): Promise<ResponseType>;
  list(query: ListQuery): Promise<ResponseType>;
  search(query: SearchQuery): Promise<ResponseType>;
}

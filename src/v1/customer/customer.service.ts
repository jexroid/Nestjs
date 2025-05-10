
import { Injectable } from "@nestjs/common";

import CRUDService from "../utils/crud/crud.service";


@Injectable()
export class CustomerService extends CRUDService {
  constructor() {
    super("customers");
  }
}

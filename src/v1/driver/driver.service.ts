import { Injectable } from '@nestjs/common';

import CRUDService from '$lib/crud/crud.service';
import { driver } from '$lib/model';


@Injectable()
export class DriverService extends CRUDService {
  constructor() {
    super(driver)
  }
}

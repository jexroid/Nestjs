import { Injectable } from '@nestjs/common';

import CRUDService from '../lib/crud/crud.service';

import { items } from '@/lib/model';

@Injectable()
export class ItemsService extends CRUDService {
  constructor() {
    super(items)
  }
}

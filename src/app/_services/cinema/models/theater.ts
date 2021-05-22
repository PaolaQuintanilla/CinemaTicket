/* tslint:disable */
/* eslint-disable */
import { Projection } from './projection';
import { Seat } from './seat';
export interface Theater {
  createdAt?: string;
  createdBy?: number;
  description?: null | string;
  id?: number;
  isActive?: number;
  name: string;
  projection?: null | Array<Projection>;
  seat?: null | Array<Seat>;
}

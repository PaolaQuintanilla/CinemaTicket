/* tslint:disable */
/* eslint-disable */
import { Seat } from './seat';
export interface Theater {
  createdAt?: string;
  createdBy?: number;
  description?: null | string;
  id?: number;
  isActive?: number;
  name: string;
  seat?: null | Array<Seat>;
}

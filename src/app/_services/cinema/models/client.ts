/* tslint:disable */
/* eslint-disable */
import { Receipt } from './receipt';
export interface Client {
  createdAt?: string;
  createdBy?: number;
  id?: number;
  isActive?: number;
  lastname: string;
  name: string;
  nit?: null | string;
  receipt?: null | Array<Receipt>;
}

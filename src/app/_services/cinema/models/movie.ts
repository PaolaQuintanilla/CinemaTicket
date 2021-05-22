/* tslint:disable */
/* eslint-disable */
import { Projection } from './projection';
export interface Movie {
  createdAt?: string;
  createdBy?: number;
  description?: null | string;
  duration?: number;
  id?: number;
  isActive?: number;
  name: string;
  projection?: null | Array<Projection>;
}

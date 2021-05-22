/* tslint:disable */
/* eslint-disable */
import { Projection } from './projection';
import { TimeSpan } from './time-span';
export interface Projectionhour {
  createdAt?: string;
  createdBy?: number;
  description?: null | string;
  hour?: TimeSpan;
  id?: number;
  isActive?: number;
  projection?: null | Array<Projection>;
}

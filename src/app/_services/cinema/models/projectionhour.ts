/* tslint:disable */
/* eslint-disable */
import { Ticket } from './ticket';
import { TimeSpan } from './time-span';
export interface Projectionhour {
  createdAt?: string;
  createdBy?: number;
  description?: null | string;
  hour?: TimeSpan;
  id?: number;
  isActive?: number;
  ticket?: null | Array<Ticket>;
}

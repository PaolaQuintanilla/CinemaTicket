/* tslint:disable */
/* eslint-disable */
import { Theater } from './theater';
import { Ticket } from './ticket';
export interface Seat {
  createdAt?: string;
  createdBy?: number;
  description?: null | string;
  id?: number;
  isActive?: number;
  name: string;
  number?: number;
  sold?: number;
  theater?: Theater;
  theaterId?: number;
  ticket?: null | Array<Ticket>;
}

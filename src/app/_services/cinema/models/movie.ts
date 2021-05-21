/* tslint:disable */
/* eslint-disable */
import { Ticket } from './ticket';
export interface Movie {
  createdAt?: string;
  createdBy?: number;
  description?: null | string;
  duration?: number;
  id?: number;
  isActive?: number;
  name: string;
  ticket?: null | Array<Ticket>;
}

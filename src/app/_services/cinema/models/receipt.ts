/* tslint:disable */
/* eslint-disable */
import { Client } from './client';
import { Ticket } from './ticket';
export interface Receipt {
  client?: Client;
  clientId?: number;
  code?: null | string;
  id?: number;
  ticket?: Ticket;
  ticketId?: number;
}

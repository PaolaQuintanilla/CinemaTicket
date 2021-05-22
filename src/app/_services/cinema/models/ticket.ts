/* tslint:disable */
/* eslint-disable */
import { Projection } from './projection';
import { Receipt } from './receipt';
import { Seat } from './seat';
export interface Ticket {
  id?: number;
  projection?: Projection;
  projectionId?: number;
  receipt?: null | Array<Receipt>;
  seat?: Seat;
  seatId?: number;
}

/* tslint:disable */
/* eslint-disable */
import { Movie } from './movie';
import { Projectionhour } from './projectionhour';
import { Receipt } from './receipt';
import { Seat } from './seat';
export interface Ticket {
  id?: number;
  movie?: Movie;
  movieId?: number;
  projectionHour?: Projectionhour;
  projectionHourId?: number;
  receipt?: null | Array<Receipt>;
  seat?: Seat;
  seatId?: number;
}

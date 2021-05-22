/* tslint:disable */
/* eslint-disable */
import { Movie } from './movie';
import { Projectionhour } from './projectionhour';
import { Theater } from './theater';
import { Ticket } from './ticket';
export interface Projection {
  id?: number;
  movie?: Movie;
  movieId?: number;
  projectionHour?: Projectionhour;
  projectionHourId?: number;
  theater?: Theater;
  theaterId?: number;
  ticket?: null | Array<Ticket>;
}

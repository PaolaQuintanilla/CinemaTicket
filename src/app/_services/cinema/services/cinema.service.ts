/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Movie } from '../models/movie';
import { MovieCriteria } from '../models/movie-criteria';
import { Projection } from '../models/projection';
import { ProjectionCriteria } from '../models/projection-criteria';
import { Projectionhour } from '../models/projectionhour';
import { ProjectionhourCriteria } from '../models/projectionhour-criteria';
import { Seat } from '../models/seat';
import { SeatCriteria } from '../models/seat-criteria';
import { Theater } from '../models/theater';
import { TheaterCriteria } from '../models/theater-criteria';
import { Ticket } from '../models/ticket';
import { TicketCriteria } from '../models/ticket-criteria';

@Injectable({
  providedIn: 'root',
})
export class CinemaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation cinemaGetTheatersGet
   */
  static readonly CinemaGetTheatersGetPath = '/Cinema/GetTheaters';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetTheatersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetTheatersGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Theater>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetTheatersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Theater>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetTheatersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetTheatersGet$Plain(params?: {
  }): Observable<Array<Theater>> {

    return this.cinemaGetTheatersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Theater>>) => r.body as Array<Theater>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetTheatersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetTheatersGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Theater>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetTheatersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Theater>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetTheatersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetTheatersGet$Json(params?: {
  }): Observable<Array<Theater>> {

    return this.cinemaGetTheatersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Theater>>) => r.body as Array<Theater>)
    );
  }

  /**
   * Path part for operation cinemaCreateTheaterPost
   */
  static readonly CinemaCreateTheaterPostPath = '/Cinema/CreateTheater';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateTheaterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateTheaterPost$Plain$Response(params?: {
    body?: TheaterCriteria
  }): Observable<StrictHttpResponse<Theater>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateTheaterPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Theater>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateTheaterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateTheaterPost$Plain(params?: {
    body?: TheaterCriteria
  }): Observable<Theater> {

    return this.cinemaCreateTheaterPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Theater>) => r.body as Theater)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateTheaterPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateTheaterPost$Json$Response(params?: {
    body?: TheaterCriteria
  }): Observable<StrictHttpResponse<Theater>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateTheaterPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Theater>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateTheaterPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateTheaterPost$Json(params?: {
    body?: TheaterCriteria
  }): Observable<Theater> {

    return this.cinemaCreateTheaterPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Theater>) => r.body as Theater)
    );
  }

  /**
   * Path part for operation cinemaGetMoviesGet
   */
  static readonly CinemaGetMoviesGetPath = '/Cinema/GetMovies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetMoviesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetMoviesGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Movie>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetMoviesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Movie>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetMoviesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetMoviesGet$Plain(params?: {
  }): Observable<Array<Movie>> {

    return this.cinemaGetMoviesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Movie>>) => r.body as Array<Movie>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetMoviesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetMoviesGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Movie>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetMoviesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Movie>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetMoviesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetMoviesGet$Json(params?: {
  }): Observable<Array<Movie>> {

    return this.cinemaGetMoviesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Movie>>) => r.body as Array<Movie>)
    );
  }

  /**
   * Path part for operation cinemaCreateMoviePost
   */
  static readonly CinemaCreateMoviePostPath = '/Cinema/CreateMovie';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateMoviePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateMoviePost$Plain$Response(params?: {
    body?: MovieCriteria
  }): Observable<StrictHttpResponse<Movie>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateMoviePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Movie>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateMoviePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateMoviePost$Plain(params?: {
    body?: MovieCriteria
  }): Observable<Movie> {

    return this.cinemaCreateMoviePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Movie>) => r.body as Movie)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateMoviePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateMoviePost$Json$Response(params?: {
    body?: MovieCriteria
  }): Observable<StrictHttpResponse<Movie>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateMoviePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Movie>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateMoviePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateMoviePost$Json(params?: {
    body?: MovieCriteria
  }): Observable<Movie> {

    return this.cinemaCreateMoviePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Movie>) => r.body as Movie)
    );
  }

  /**
   * Path part for operation cinemaGetHoursGet
   */
  static readonly CinemaGetHoursGetPath = '/Cinema/GetHours';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetHoursGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetHoursGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Projectionhour>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetHoursGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Projectionhour>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetHoursGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetHoursGet$Plain(params?: {
  }): Observable<Array<Projectionhour>> {

    return this.cinemaGetHoursGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Projectionhour>>) => r.body as Array<Projectionhour>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetHoursGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetHoursGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Projectionhour>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetHoursGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Projectionhour>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetHoursGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetHoursGet$Json(params?: {
  }): Observable<Array<Projectionhour>> {

    return this.cinemaGetHoursGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Projectionhour>>) => r.body as Array<Projectionhour>)
    );
  }

  /**
   * Path part for operation cinemaCreateHourPost
   */
  static readonly CinemaCreateHourPostPath = '/Cinema/CreateHour';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateHourPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateHourPost$Plain$Response(params?: {
    body?: ProjectionhourCriteria
  }): Observable<StrictHttpResponse<Projectionhour>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateHourPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Projectionhour>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateHourPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateHourPost$Plain(params?: {
    body?: ProjectionhourCriteria
  }): Observable<Projectionhour> {

    return this.cinemaCreateHourPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Projectionhour>) => r.body as Projectionhour)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateHourPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateHourPost$Json$Response(params?: {
    body?: ProjectionhourCriteria
  }): Observable<StrictHttpResponse<Projectionhour>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateHourPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Projectionhour>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateHourPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateHourPost$Json(params?: {
    body?: ProjectionhourCriteria
  }): Observable<Projectionhour> {

    return this.cinemaCreateHourPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Projectionhour>) => r.body as Projectionhour)
    );
  }

  /**
   * Path part for operation cinemaGetProjectionIdGet
   */
  static readonly CinemaGetProjectionIdGetPath = '/Cinema/GetProjection/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetProjectionIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetProjectionIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Projection>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetProjectionIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Projection>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetProjectionIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetProjectionIdGet$Plain(params: {
    id: number;
  }): Observable<Projection> {

    return this.cinemaGetProjectionIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Projection>) => r.body as Projection)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetProjectionIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetProjectionIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Projection>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetProjectionIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Projection>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetProjectionIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetProjectionIdGet$Json(params: {
    id: number;
  }): Observable<Projection> {

    return this.cinemaGetProjectionIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Projection>) => r.body as Projection)
    );
  }

  /**
   * Path part for operation cinemaGetProjectionsGet
   */
  static readonly CinemaGetProjectionsGetPath = '/Cinema/GetProjections';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetProjectionsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetProjectionsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Projection>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetProjectionsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Projection>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetProjectionsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetProjectionsGet$Plain(params?: {
  }): Observable<Array<Projection>> {

    return this.cinemaGetProjectionsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Projection>>) => r.body as Array<Projection>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetProjectionsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetProjectionsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Projection>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetProjectionsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Projection>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetProjectionsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetProjectionsGet$Json(params?: {
  }): Observable<Array<Projection>> {

    return this.cinemaGetProjectionsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Projection>>) => r.body as Array<Projection>)
    );
  }

  /**
   * Path part for operation cinemaCreateProjectionPost
   */
  static readonly CinemaCreateProjectionPostPath = '/Cinema/CreateProjection';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateProjectionPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateProjectionPost$Plain$Response(params?: {
    body?: ProjectionCriteria
  }): Observable<StrictHttpResponse<Projection>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateProjectionPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Projection>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateProjectionPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateProjectionPost$Plain(params?: {
    body?: ProjectionCriteria
  }): Observable<Projection> {

    return this.cinemaCreateProjectionPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Projection>) => r.body as Projection)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateProjectionPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateProjectionPost$Json$Response(params?: {
    body?: ProjectionCriteria
  }): Observable<StrictHttpResponse<Projection>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateProjectionPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Projection>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateProjectionPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateProjectionPost$Json(params?: {
    body?: ProjectionCriteria
  }): Observable<Projection> {

    return this.cinemaCreateProjectionPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Projection>) => r.body as Projection)
    );
  }

  /**
   * Path part for operation cinemaGetTicketsByIdGet
   */
  static readonly CinemaGetTicketsByIdGetPath = '/Cinema/GetTicketsBy/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetTicketsByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetTicketsByIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<Ticket>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetTicketsByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Ticket>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetTicketsByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetTicketsByIdGet$Plain(params: {
    id: number;
  }): Observable<Array<Ticket>> {

    return this.cinemaGetTicketsByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Ticket>>) => r.body as Array<Ticket>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetTicketsByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetTicketsByIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<Ticket>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetTicketsByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Ticket>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetTicketsByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetTicketsByIdGet$Json(params: {
    id: number;
  }): Observable<Array<Ticket>> {

    return this.cinemaGetTicketsByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Ticket>>) => r.body as Array<Ticket>)
    );
  }

  /**
   * Path part for operation cinemaCreateTicketPost
   */
  static readonly CinemaCreateTicketPostPath = '/Cinema/CreateTicket';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateTicketPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateTicketPost$Plain$Response(params?: {
    body?: TicketCriteria
  }): Observable<StrictHttpResponse<Ticket>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateTicketPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ticket>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateTicketPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateTicketPost$Plain(params?: {
    body?: TicketCriteria
  }): Observable<Ticket> {

    return this.cinemaCreateTicketPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Ticket>) => r.body as Ticket)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateTicketPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateTicketPost$Json$Response(params?: {
    body?: TicketCriteria
  }): Observable<StrictHttpResponse<Ticket>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateTicketPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ticket>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateTicketPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateTicketPost$Json(params?: {
    body?: TicketCriteria
  }): Observable<Ticket> {

    return this.cinemaCreateTicketPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Ticket>) => r.body as Ticket)
    );
  }

  /**
   * Path part for operation cinemaGetSeatsByIdGet
   */
  static readonly CinemaGetSeatsByIdGetPath = '/Cinema/GetSeatsBy/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetSeatsByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetSeatsByIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<Seat>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetSeatsByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Seat>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetSeatsByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetSeatsByIdGet$Plain(params: {
    id: number;
  }): Observable<Array<Seat>> {

    return this.cinemaGetSeatsByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Seat>>) => r.body as Array<Seat>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaGetSeatsByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetSeatsByIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<Seat>>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaGetSeatsByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Seat>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaGetSeatsByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cinemaGetSeatsByIdGet$Json(params: {
    id: number;
  }): Observable<Array<Seat>> {

    return this.cinemaGetSeatsByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Seat>>) => r.body as Array<Seat>)
    );
  }

  /**
   * Path part for operation cinemaCreateSeatPost
   */
  static readonly CinemaCreateSeatPostPath = '/Cinema/CreateSeat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateSeatPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateSeatPost$Plain$Response(params?: {
    body?: SeatCriteria
  }): Observable<StrictHttpResponse<Seat>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateSeatPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Seat>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateSeatPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateSeatPost$Plain(params?: {
    body?: SeatCriteria
  }): Observable<Seat> {

    return this.cinemaCreateSeatPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Seat>) => r.body as Seat)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cinemaCreateSeatPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateSeatPost$Json$Response(params?: {
    body?: SeatCriteria
  }): Observable<StrictHttpResponse<Seat>> {

    const rb = new RequestBuilder(this.rootUrl, CinemaService.CinemaCreateSeatPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Seat>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cinemaCreateSeatPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cinemaCreateSeatPost$Json(params?: {
    body?: SeatCriteria
  }): Observable<Seat> {

    return this.cinemaCreateSeatPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Seat>) => r.body as Seat)
    );
  }

}

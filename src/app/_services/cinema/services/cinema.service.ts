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
import { Theater } from '../models/theater';
import { TheaterCriteria } from '../models/theater-criteria';

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

}

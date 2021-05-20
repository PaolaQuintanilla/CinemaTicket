import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';


@NgModule({
  declarations: [
    CreateMovieComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }

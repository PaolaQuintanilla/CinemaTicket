import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  { path: 'add', component: CreateMovieComponent },
  { path: 'list', component: MovieListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const theaterModule = () => import('./theater/theater.module').then(x => x.TheaterModule);
const movieModule = () => import('./movie/movie.module').then(x => x.MovieModule);

const routes: Routes = [
  { path: 'theater', loadChildren: theaterModule },
  { path: 'movie', loadChildren: movieModule },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }

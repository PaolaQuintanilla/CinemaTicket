import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const theaterModule = () => import('./theater/theater.module').then(x => x.TheaterModule);
const movieModule = () => import('./movie/movie.module').then(x => x.MovieModule);
const hourModule = () => import('./projection-hour/projection-hour.module').then(x => x.ProjectionHourModule);

const routes: Routes = [
  { path: 'theater', loadChildren: theaterModule },
  { path: 'movie', loadChildren: movieModule },
  { path: 'hour', loadChildren: hourModule },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }

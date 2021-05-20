import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const theaterModule = () => import('./theater/theater.module').then(x => x.TheaterModule);

const routes: Routes = [
  { path: 'theater', loadChildren: theaterModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }

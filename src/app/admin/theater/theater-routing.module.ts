import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTheaterComponent } from './create-theater/create-theater.component';
import { TheaterListComponent } from './theater-list/theater-list.component';

const routes: Routes = [
  { path: 'add', component: CreateTheaterComponent },
  { path: 'list', component: TheaterListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheaterRoutingModule { }

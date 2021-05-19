import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTheaterComponent } from './create-theater/create-theater.component';

const routes: Routes = [
  { path: 'add', component: CreateTheaterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheaterRoutingModule { }

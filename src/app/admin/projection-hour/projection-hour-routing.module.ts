import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHourComponent } from './create-hour/create-hour.component';
import { HourListComponent } from './hour-list/hour-list.component';

const routes: Routes = [
  { path: 'add', component: CreateHourComponent },
  { path: 'list', component: HourListComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectionHourRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectionHourRoutingModule } from './projection-hour-routing.module';
import { CreateHourComponent } from './create-hour/create-hour.component';
import { HourListComponent } from './hour-list/hour-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateHourComponent,
    HourListComponent
  ],
  imports: [
    CommonModule,
    ProjectionHourRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProjectionHourModule { }

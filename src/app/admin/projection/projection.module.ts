import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectionRoutingModule } from './projection-routing.module';
import { ProjectionComponent } from './projection.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectionComponent
  ],
  imports: [
    CommonModule,
    ProjectionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProjectionModule { }

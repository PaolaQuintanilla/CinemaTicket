import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheaterRoutingModule } from './theater-routing.module';
import { CreateTheaterComponent } from './create-theater/create-theater.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateTheaterComponent
  ],
  imports: [
    CommonModule,
    TheaterRoutingModule,
    ReactiveFormsModule
  ]
})
export class TheaterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';


@NgModule({
  declarations: [
    ControlPanelComponent
  ],
  imports: [
    CommonModule,
    CinemaRoutingModule
  ]
})
export class CinemaModule { }

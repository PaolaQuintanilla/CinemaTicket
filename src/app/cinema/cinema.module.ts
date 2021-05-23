import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ControlPanelComponent,
    MovieDetailComponent,
    ReceiptComponent
  ],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    ReactiveFormsModule
  ]
})
export class CinemaModule { }

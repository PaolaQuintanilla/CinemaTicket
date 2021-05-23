import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptComponent } from './receipt/receipt.component';

const controlPanelModule = () => import('./control-panel/control-panel.module').then(x => x.ControlPanelModule);
const movieDetailModule = () => import('./movie-detail/movie-detail.module').then(x => x.MovieDetailModule);
const receiptModule = () => import('./receipt/receipt.module').then(x => x.ReceiptModule);

const routes: Routes = [
  { path: 'controlPanel', loadChildren: controlPanelModule },
  { path: 'movieDetail', loadChildren: movieDetailModule },
  { path: 'receipt', loadChildren: receiptModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemaRoutingModule { }

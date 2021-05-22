import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const controlPanelModule = () => import('./control-panel/control-panel.module').then(x => x.ControlPanelModule);

const routes: Routes = [
  { path: 'controlPanel', loadChildren: controlPanelModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemaRoutingModule { }

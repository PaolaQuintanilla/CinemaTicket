import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const cinemaModule = () => import('./cinema/cinema.module').then(x => x.CinemaModule);

const routes: Routes = [
  { path: 'admin', loadChildren: adminModule },
  { path: 'cinema', loadChildren: cinemaModule },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

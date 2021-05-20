import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);

const routes: Routes = [
  { path: 'admin', loadChildren: adminModule },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

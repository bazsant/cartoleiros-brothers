import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegrantesComponent } from './integrantes/integrantes.component';

const routes: Routes = [
  { path: '', component: IntegrantesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubesRoutingModule { }

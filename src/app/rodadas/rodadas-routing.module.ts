import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaRodadasComponent } from './lista-rodadas/lista-rodadas.component';

const routes: Routes = [
  { path: '', component: ListaRodadasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RodadasRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PontuacaoComponent } from './pontuacao/pontuacao.component';

const routes: Routes = [
  { path: "pontuacao", component: PontuacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegrasRoutingModule { }

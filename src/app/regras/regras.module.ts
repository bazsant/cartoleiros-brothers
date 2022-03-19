import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegrasRoutingModule } from './regras-routing.module';
import { PontuacaoComponent } from './pontuacao/pontuacao.component';


@NgModule({
  declarations: [
    PontuacaoComponent
  ],
  imports: [
    CommonModule,
    RegrasRoutingModule
  ]
})
export class RegrasModule { }

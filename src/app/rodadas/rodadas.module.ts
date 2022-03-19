import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RodadasRoutingModule } from './rodadas-routing.module';
import { ListaRodadasComponent } from './lista-rodadas/lista-rodadas.component';
import { DetalheRodadaComponent } from './detalhe-rodada/detalhe-rodada.component';


@NgModule({
  declarations: [
    ListaRodadasComponent,
    DetalheRodadaComponent
  ],
  imports: [
    CommonModule,
    RodadasRoutingModule
  ]
})
export class RodadasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubesRoutingModule } from './clubes-routing.module';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { DetalheClubeComponent } from './detalhe-clube/detalhe-clube.component';


@NgModule({
  declarations: [
    IntegrantesComponent,
    DetalheClubeComponent
  ],
  imports: [
    CommonModule,
    ClubesRoutingModule
  ]
})
export class ClubesModule { }

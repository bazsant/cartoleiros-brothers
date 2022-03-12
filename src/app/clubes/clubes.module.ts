import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubesRoutingModule } from './clubes-routing.module';
import { IntegrantesComponent } from './integrantes/integrantes.component';


@NgModule({
  declarations: [
    IntegrantesComponent
  ],
  imports: [
    CommonModule,
    ClubesRoutingModule
  ]
})
export class ClubesModule { }

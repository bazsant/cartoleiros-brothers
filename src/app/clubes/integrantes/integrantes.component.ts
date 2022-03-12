import { Component, OnInit } from '@angular/core';
import ClubesJson from '../../../assets/json-files/clubes.json';

interface Clube {
  id: string,
  nome: string,
  imagem: string
}

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss']
})
export class IntegrantesComponent implements OnInit {

  constructor() { }

  clubes: Clube[] = ClubesJson;

  ngOnInit(): void {
    
  }

}

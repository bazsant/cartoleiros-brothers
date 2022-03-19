import { Component, OnInit } from '@angular/core';
import { ClubeModel } from 'src/app/models/ClubeModel';
import ClubesJson from '../../../assets/json-files/clubes.json';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss']
})
export class IntegrantesComponent implements OnInit {

  constructor() { }

  clubes: ClubeModel[] = ClubesJson;

  ngOnInit(): void {
    
  }

}

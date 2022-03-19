import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-rodada',
  templateUrl: './detalhe-rodada.component.html',
  styleUrls: ['./detalhe-rodada.component.scss']
})
export class DetalheRodadaComponent implements OnInit {

  @Input() numeroRodada: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}

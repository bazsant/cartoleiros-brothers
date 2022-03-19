import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-rodadas',
  templateUrl: './lista-rodadas.component.html',
  styleUrls: ['./lista-rodadas.component.scss']
})
export class ListaRodadasComponent implements OnInit {

  constructor() { }

  rodadas = Array.from({length: 38}, (_, i) => i + 1);
  rodadaSelecionada: number = 0;

  ngOnInit(): void {
  }

  onChangeRodada(rodada: any) {
    this.rodadaSelecionada = rodada.value;
  }

}

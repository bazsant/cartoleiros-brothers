import { Component, Input, OnInit } from '@angular/core';
import RodadasJson from '../../../assets/json-files/rodadas.json';
import ClubesJson from '../../../assets/json-files/clubes.json';
import Swal from 'sweetalert2'


;
import { RodadaModel } from 'src/app/models/RodadaModel';
import { ClubeModel } from 'src/app/models/ClubeModel';
@Component({
  selector: 'app-detalhe-rodada',
  templateUrl: './detalhe-rodada.component.html',
  styleUrls: ['./detalhe-rodada.component.scss']
})
export class DetalheRodadaComponent implements OnInit {

  private _numeroRodada: number = 0;
  get numeroRodada(): number {
    return this._numeroRodada;
  }
  @Input() set numeroRodada(value: number) {
    this._numeroRodada = value;
    this.preencherRodada(value);
  }

  rodadas: RodadaModel[] = RodadasJson;
  clubes: ClubeModel[] = ClubesJson;
  possuiRodada = false;

  rodadaSelecionada: RodadaModel;

  constructor() {
    this.rodadaSelecionada = new RodadaModel();
  }

  ngOnInit(): void {

  }

  preencherRodada(rodada: number) {
    const buscaRodada = this.rodadas.find(x => x.numero == rodada);    
    if (buscaRodada) {
      this.rodadaSelecionada = buscaRodada;
      this.possuiRodada = true;
    } else {
      this.possuiRodada = false;
      Swal.fire({
        title: 'Opa!',
        customClass: {
          popup: 'bg-dark text-white'
        },
        text: 'Rodada ainda não cadastrada!',
        icon: 'error',
        confirmButtonText: 'Beleza'
      })
    }
  }

  obterNome(id: string) {
    return this.clubes.find(x => x.id == id)?.nome;     
  }

}

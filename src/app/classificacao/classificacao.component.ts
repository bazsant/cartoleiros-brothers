import { Component, OnInit } from '@angular/core';
import RodadasJson from '../../assets/json-files/rodadas.json';
import ClubesJson from '../../assets/json-files/clubes.json';
import PontuacaoJson from '../../assets/json-files/pontuacao.json';
import { ClubeModel } from '../models/ClubeModel';
import { RodadaModel } from '../models/RodadaModel';
import { PosicaoModel } from '../models/PosicaoModel';
import { PontuacaoModel } from '../models/PontuacaoModel';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.scss']
})
export class ClassificacaoComponent implements OnInit {

  rodadas: RodadaModel[] = RodadasJson;
  clubes: ClubeModel[] = ClubesJson;
  pontuacao: PontuacaoModel[] = PontuacaoJson;
  classificacao: PosicaoModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.calcularClassificacao();    
  }

  calcularClassificacao() {
    this.clubes.forEach(c => {
      const pontos = this.obterPontos(c.id);
      this.classificacao.push(new PosicaoModel(c.id, pontos, c.nome));      
    })

    this.classificacao = this.classificacao.sort((a,b) => b.pontos - a.pontos);
  }

  obterPontos(clubeId: string): number {
    let quantidadePontos = 0;
    
    this.rodadas.forEach(r => {
      const colocacao = r.colocacoes.indexOf(clubeId) + 1;

      quantidadePontos += this.obterQuantidadePontos(colocacao);

      if (r.bonus == clubeId) {
        quantidadePontos++;
      }
    });

    return quantidadePontos;
  }

  obterQuantidadePontos(colocacao: number): number {
    const pontos = this.pontuacao.find(p => p.colocacao == colocacao);
    return pontos ? pontos.pontos : 0;
  }

}

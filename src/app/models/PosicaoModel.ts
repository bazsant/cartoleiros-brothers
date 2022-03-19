export class PosicaoModel {    
    constructor(id: string, pontos: number, nome: string) {
        this.clubeId = id;
        this.pontos = pontos;
        this.nome = nome;
    }
    clubeId: string = '';
    pontos: number = 0;
    nome: string = '';
}
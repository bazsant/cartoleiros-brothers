export class PosicaoModel {    
    constructor(id: string, pontos: number, nome: string, imagem: string) {
        this.clubeId = id;
        this.pontos = pontos;
        this.nome = nome;
        this.imagem = imagem;
    }
    clubeId: string = '';
    pontos: number = 0;
    nome: string = '';
    imagem: string = '';
}
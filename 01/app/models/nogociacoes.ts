import { Negociacao } from './nogociacao';

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
    // private negociacoes: Negociacao[] = []   ---   são a mesma coisa

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): Array<Negociacao> {
        return [...this.negociacoes]; // sprad operator - em vez de passar referencia, cria uma nova lista com os itens da lista
    }

    // lista2(): readonly Negociacao[] {
    lista2(): ReadonlyArray<Negociacao> { // somente leitura da lista.
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes();

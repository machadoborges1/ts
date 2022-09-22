import { Negociacao } from "../models/nogociacao.js";
import { Negociacoes } from "../models/nogociacoes.js";

export class NegociacaoControle {
    private inpotData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();

    constructor() {
        this.inpotData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    
    criaNegociacao(): Negociacao {
        const exp = /-/;
        const date = new Date(this.inpotData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputValor.value = '';
        this.inputQuantidade.value = '';
        this.inpotData.value = '';
        this.inpotData.focus(); // muda o foco para data
    }
}
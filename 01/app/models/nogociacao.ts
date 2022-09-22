export class Negociacao {
    //private _data: Date; // padrão TS é public
    //private _quantidade: number;
    //private _valor: number;

    /*
    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    */

    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ) {}

    get data(): Date {
        const data = new Date(this._data.getTime());    // programação defensiva
        return data; // retorna o clone --- dessa forma qualquer motificação na _data será no clone e não nela propria
    }
    get quantidade(): number { return this._quantidade }
    get valor(): number { return this._valor }
    get volume(): number {
        return this._valor * this._quantidade 
    }
}


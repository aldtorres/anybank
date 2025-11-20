export class Transacao {
    constructor(
        public readonly tipo: TipoTransacao, 
        public readonly valur: number) {
    }
}


export enum TipoTransacao{
    DEPOSITO = 'deposito',
    SAQUE = 'saque'
}
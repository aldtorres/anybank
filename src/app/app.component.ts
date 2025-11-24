import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { TipoTransacao, Transacao } from './model/transacao';
import { ExtratoComponent } from "./extrato/extrato.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anybank';
  // dados mutaveis e reativos!
  transacoes = signal<Transacao[]>([]);

  //acessar dados de  origem signal => computed é uma dependencia de um signal
  //computed é um signal a partir de outro signal [SIGNAL DERIVADO OU SIGNAL COMPUTADO]
  saldoAtual = computed(() => {
    return this.transacoes().reduce((acumulador, transacaoAtual) => {
      
      switch(transacaoAtual.tipo){
        case TipoTransacao.DEPOSITO:
          return acumulador + transacaoAtual.valor;  
        case TipoTransacao.SAQUE:
          return acumulador - transacaoAtual.valor;  
        default:
          throw new Error(TipoTransacao.SAQUE || ' - Tipo de transacao não identificado.')
      }

      

    }, 0)
  });

  // função
  processarTransacao(novaTransacao : Transacao) {
    console.log('Transação adicionados "signal"!');
    console.log(novaTransacao);

    if(novaTransacao.tipo == TipoTransacao.SAQUE && novaTransacao.valor > this.saldoAtual()){
      alert('SALDO INSUFICIENTE!!!')
      return;
    }

    //this.transacoes.set()
    this.transacoes.update((listaAtualTransacoes) => [novaTransacao, ...listaAtualTransacoes ])

    console.log('Atualizado "this.transacoes"  "signal"!');
    console.log(this.transacoes());
  }

}

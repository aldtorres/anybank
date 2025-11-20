import { Component, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { Transacao } from './model/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anybank';
  // dados mutaveis e reativos!
  transacoes = signal<Transacao[]>([]);

  // função
  processarTransacao(novaTransacao : Transacao) {
    console.log('Transação adicionados "signal"!');
    console.log(novaTransacao);

    //this.transacoes.set()
    this.transacoes.update((listaAtualTransacoes) => [novaTransacao, ...listaAtualTransacoes ])

    console.log('Atualizado "this.transacoes"  "signal"!');
    console.log(this.transacoes());
  }

}

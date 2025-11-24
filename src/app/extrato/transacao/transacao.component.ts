import { Component, computed, input } from '@angular/core';
import { TipoTransacao, Transacao } from '../../model/transacao';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent {

  transacao = input.required<Transacao>()

  valorTransacaoFormatada =  computed(() => {
    return this.transacao().valor * (this.transacao().tipo === TipoTransacao.SAQUE ? -1 : 1);
  });

}

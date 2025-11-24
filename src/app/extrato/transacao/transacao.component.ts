import { Component, input } from '@angular/core';
import { Transacao } from '../../model/transacao';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent {

  transacao = input.required<Transacao>()

}

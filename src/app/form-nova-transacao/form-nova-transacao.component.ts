import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../model/transacao';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {

    valorTransacao ="";
    tipoTransacao ="";

    //outPut
    handleTransacaoCriada = output<Transacao>();
    //
    aoSubmeter(){
      console.log('submetido!');
      console.log(this.valorTransacao);
      console.log(this.tipoTransacao);

      //
      const transacao = new Transacao(this.tipoTransacao as TipoTransacao,  Number(this.valorTransacao));
      //
      this.handleTransacaoCriada.emit(transacao);

      this.valorTransacao ="";
      this.tipoTransacao ="";


    }
}

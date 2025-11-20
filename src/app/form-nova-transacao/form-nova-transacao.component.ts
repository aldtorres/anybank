import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {

    valorTransacao ="";
    tipoTransacao ="";

    //
    aoSubmeter(){
      console.log('submetido!');
      console.log(this.valorTransacao);
      console.log(this.tipoTransacao);

      this.valorTransacao ="";
      this.tipoTransacao ="";
    }
}

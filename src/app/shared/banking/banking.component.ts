import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent {
  private poupanca: number = 10;
  private carteira: number = 50;

  get getPoupanca() {
    return this.poupanca;
  }

  get getCarteira() {
    return this.carteira;
  }


  sacarValor(valor: string): number {
    const sacar = Number(valor);
    console.log(sacar);

    return sacar;
  }

  DepositarValor(valor: string): number {
    const sacar = Number(valor);
    console.log(sacar);

    return sacar;
  }


}

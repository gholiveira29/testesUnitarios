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


  sacarValor(valor: string): number | undefined {
    const sacar = Number(valor);
    if (isNaN(sacar) || this.poupanca < sacar) {
      return;
    }

    this.poupanca -= sacar;

    return this.carteira += sacar;
  }

  DepositarValor(valor: string): number | undefined {
    const depositar = Number(valor);
    if (isNaN(depositar) || this.carteira < depositar) {
      return;
    }

    this.carteira -= depositar;
    return this.poupanca += depositar;
  }
}

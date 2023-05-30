import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/components/list/list.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent]
    });
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(u) getPoupanca(): shoud have  = 10', () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it('(u) getCarteira(): shoud have  = 50', () => {
    expect(component.getCarteira).toEqual(50);
  });

  it('(u) sacarValor(): shoud transfer poupanca from carteira', () => {
    component.sacarValor('10');

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  it('(u) sacarValor(): shoud transfer poupanca dont have string or poupanca < value', () => {
    expect(component.sacarValor('string')).not.toBeTruthy();
    expect(component.sacarValor('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it('(u) sacarValor(): shoud transfer carteira from pupanca', () => {
    component.DepositarValor('20');

    expect(component.getCarteira).toEqual(30);
    expect(component.getPoupanca).toEqual(30);
  });

  it('(u) depositarValor(): shoud transfer carteira dont have string or carteira < value', () => {
    expect(component.DepositarValor('string')).not.toBeTruthy();
    expect(component.DepositarValor('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it('(i) depositarValor(): shoud transfer carteira from poupanca', () => {
    let element = fixture.debugElement.nativeElement;
    element.querySelector('#input-depositar').value = '10';
    element.querySelector('#depositar').click();
    fixture.detectChanges();
    expect(element.querySelector('#get-poupanca').textContent).toEqual('R$20.00');
  });

});

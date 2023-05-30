import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(u) should list investments', () => {
    let investiments = component.investiments;
    expect(investiments.length).toBe(4);
    expect(investiments[0].name).toContain('Itau');
    expect(investiments[3].name).toContain('Inter');
  });

  it('(i) should list investments', () => {
    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-invest');
    expect(investiments.length).toBe(4);
    expect(investiments[0].textContent.trim()).toEqual('Itau - R$1,500.00');
    expect(investiments[3].textContent.trim()).toEqual('Inter - R$1,500.00');
  });
});

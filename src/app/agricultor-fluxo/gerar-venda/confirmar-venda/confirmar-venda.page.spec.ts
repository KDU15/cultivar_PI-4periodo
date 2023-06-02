import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarVendaPage } from './confirmar-venda.page';

describe('ConfirmarVendaPage', () => {
  let component: ConfirmarVendaPage;
  let fixture: ComponentFixture<ConfirmarVendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmarVendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

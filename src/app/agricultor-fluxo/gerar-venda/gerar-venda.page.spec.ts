import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GerarVendaPage } from './gerar-venda.page';

describe('GerarVendaPage', () => {
  let component: GerarVendaPage;
  let fixture: ComponentFixture<GerarVendaPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(GerarVendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

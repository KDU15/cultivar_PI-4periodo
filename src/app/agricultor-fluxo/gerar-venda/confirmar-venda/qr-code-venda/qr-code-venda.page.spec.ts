import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrCodeVendaPage } from './qr-code-venda.page';

describe('QrCodeVendaPage', () => {
  let component: QrCodeVendaPage;
  let fixture: ComponentFixture<QrCodeVendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrCodeVendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { QrCodeVendaPage } from './qr-code-venda.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import * as QRCode from 'qrcode';

describe('QrCodeVendaPage', () => {
  let component: QrCodeVendaPage;
  let fixture: ComponentFixture<QrCodeVendaPage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [QrCodeVendaPage],
      imports: [ReactiveFormsModule, IonicModule.forRoot(), HttpClientModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach((() => {
    fixture = TestBed.createComponent(QrCodeVendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Copiar o código PIX para a área de transferência', () => {
    // Arrange
    const mockTextArea = document.createElement('textarea');
    spyOn(document, 'createElement').and.returnValue(mockTextArea);
    spyOn(document.body, 'appendChild');
    spyOn(document.body, 'removeChild');
    spyOn(mockTextArea, 'select');
    spyOn(document, 'execCommand');
  
    // Act
    component.codPix = 'PIXCODE123';
    component.copy();
  
    // Assert
    expect(document.createElement).toHaveBeenCalledWith('textarea');
    expect(document.body.appendChild).toHaveBeenCalledWith(mockTextArea);
    expect(mockTextArea.value).toBe('PIXCODE123');
    expect(mockTextArea.select).toHaveBeenCalled();
    expect(document.execCommand).toHaveBeenCalledWith('copy');
    expect(document.body.removeChild).toHaveBeenCalledWith(mockTextArea);
  });
  

  it('Limpar o código PIX ao navegar de volta', () => {
    component.codPix = 'example-pix-code';
    component.back();
    expect(component.codPix).toBe('');
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CadastroPage } from './cadastro.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CadastroPage', () => {
  let component: CadastroPage;
  let fixture: ComponentFixture<CadastroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPage],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Desativar o botão quando o formulário for inválido', () => {
    component.cadForm.controls['name'].setValue('');
    component.cadForm.controls['cpf'].setValue('');
    component.cadForm.controls['phone'].setValue('');
    component.cadForm.controls['email'].setValue('');
    component.cadForm.controls['cep'].setValue('');
    component.cadForm.controls['state'].setValue('');
    component.cadForm.controls['city'].setValue('');
    component.cadForm.controls['neighborhood'].setValue('');
    component.cadForm.controls['street'].setValue('');
    component.cadForm.controls['password'].setValue('');

    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('ion-button');
    expect(buttonElement.disabled).toBeTruthy();
  });

  it('Ativar o botão quando o formulário for válido', () => {
    component.cadForm.controls['name'].setValue('John Doe');
    component.cadForm.controls['cpf'].setValue('123456789');
    component.cadForm.controls['phone'].setValue('123456789');
    component.cadForm.controls['email'].setValue('john.doe@example.com');
    component.cadForm.controls['cep'].setValue('12345678');
    component.cadForm.controls['state'].setValue('SP');
    component.cadForm.controls['city'].setValue('Sao Paulo');
    component.cadForm.controls['neighborhood'].setValue('Downtown');
    component.cadForm.controls['street'].setValue('Main Street');
    component.cadForm.controls['password'].setValue('password123');

    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('ion-button');
    expect(buttonElement.disabled).toBeFalsy();
  });

  it('Chamar o método finalizar() quando o formulário for enviado', () => {
    spyOn(component, 'finalizar');
    component.cadForm.controls['name'].setValue('John Doe');
    component.cadForm.controls['cpf'].setValue('123456789');
    component.cadForm.controls['phone'].setValue('123456789');
    component.cadForm.controls['email'].setValue('john.doe@example.com');
    component.cadForm.controls['cep'].setValue('12345678');
    component.cadForm.controls['state'].setValue('SP');
    component.cadForm.controls['city'].setValue('Sao Paulo');
    component.cadForm.controls['neighborhood'].setValue('Downtown');
    component.cadForm.controls['street'].setValue('Main Street');
    component.cadForm.controls['password'].setValue('password123');

    fixture.detectChanges();
    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.finalizar).toHaveBeenCalled();
  });
});

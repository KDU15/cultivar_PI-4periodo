import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let debugElement: DebugElement;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [ReactiveFormsModule, IonicModule.forRoot(), HttpClientModule, FormsModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('Renderizar entradas de login e senha', () => {
    const loginInput = debugElement.query(By.css('ion-input[formControlName="login"]'));
    const passwordInput = debugElement.query(By.css('ion-input[formControlName="password"]'));

    expect(loginInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it('Renderizar o botão de login', () => {
    const loginButton = debugElement.query(By.css('ion-button[type="ngSubmit"]'));

    expect(loginButton).toBeTruthy();
  });

  it('Armazenar valores nos controles de formulário quando os campos de entrada são preenchidos', () => {
    const loginInput = component.loginForm.controls['login'];
    const passwordInput = component.loginForm.controls['password'];
  
    const testLogin = 'testUser';
    const testPassword = 'testPassword';
  
    loginInput.setValue(testLogin);
    passwordInput.setValue(testPassword);
  
    expect(loginInput.value).toBe(testLogin);
    expect(passwordInput.value).toBe(testPassword);
  });
  
  it('Chamar o método entrar() quando o botão de login for clicado', () => {
    spyOn(component, 'entrar');
  
    component.loginForm.controls['login'].setValue('usuario');
    component.loginForm.controls['password'].setValue('123456789');
  
    fixture.detectChanges();
    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
  
    expect(component.entrar).toHaveBeenCalled();
  });

  it('Marcar o formulário como inválido quando os campos de login e senha estiverem vazios', () => {
    component.loginForm.controls['login'].setValue('');
    component.loginForm.controls['password'].setValue('');
  
    expect(component.loginForm.invalid).toBe(true);
  });
  
  it('Marcar o formulário como válido quando os campos de login e senha forem preenchidos', () => {
    component.loginForm.controls['login'].setValue('testUser');
    component.loginForm.controls['password'].setValue('testPassword');
  
    expect(component.loginForm.valid).toBe(true);
  });
  
  
});


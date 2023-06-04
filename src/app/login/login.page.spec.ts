import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let debugElement: DebugElement;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [ReactiveFormsModule, IonicModule.forRoot(), HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should render login and password inputs', () => {
    const loginInput = debugElement.query(By.css('ion-input[formControlName="login"]'));
    const passwordInput = debugElement.query(By.css('ion-input[formControlName="password"]'));

    expect(loginInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it('should render login button', () => {
    const loginButton = debugElement.query(By.css('ion-button[type="ngSubmit"]'));

    expect(loginButton).toBeTruthy();
  });
});


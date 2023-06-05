import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Exibir as informações do usuário corretamente', () => {
    const desdeElement = fixture.nativeElement.querySelector('.desde');
    const tipoElement = fixture.nativeElement.querySelector('.tipo');

    expect(desdeElement.textContent.trim()).toBe('Desde 15/07/2002');
    expect(tipoElement.textContent.trim()).toBe('AGRICULTOR');
  });
});

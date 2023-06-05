import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { IntroducaoPage } from './introducao.page';

describe('IntroducaoPage', () => {
  let component: IntroducaoPage;
  let fixture: ComponentFixture<IntroducaoPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IntroducaoPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(IntroducaoPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Navegar para a página de login', () => {
    const navigateByUrlSpy = spyOn(component.router, 'navigateByUrl');

    const button = fixture.debugElement.nativeElement.querySelector('.interacao ion-button');
    button.dispatchEvent(new Event('click'));

    expect(navigateByUrlSpy).toHaveBeenCalledWith('/login');
  });

  it('Navegar para a página de cadastro', () => {
    const navigateByUrlSpy = spyOn(component.router, 'navigateByUrl');

    const buttons = fixture.debugElement.nativeElement.querySelectorAll('.interacao ion-button');
    buttons[1].dispatchEvent(new Event('click'));

    expect(navigateByUrlSpy).toHaveBeenCalledWith('/cadastro');
  });
});

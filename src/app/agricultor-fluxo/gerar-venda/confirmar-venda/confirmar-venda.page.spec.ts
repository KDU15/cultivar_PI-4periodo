import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { ConfirmarVendaPage } from './confirmar-venda.page';

describe('ConfirmarVendaPage', () => {
  let component: ConfirmarVendaPage;
  let fixture: ComponentFixture<ConfirmarVendaPage>;
  let modalController: ModalController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarVendaPage],
      imports: [IonicModule.forRoot()],
      providers: [ModalController],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmarVendaPage);
    component = fixture.componentInstance;
    modalController = TestBed.inject(ModalController);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Fechar modal ao cancelar', () => {
    spyOn(modalController, 'dismiss').and.callThrough();

    component.cancel();

    expect(modalController.dismiss).toHaveBeenCalled();
  });
});

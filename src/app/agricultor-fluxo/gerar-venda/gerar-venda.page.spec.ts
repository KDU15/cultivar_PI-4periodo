import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { GerarVendaPage } from './gerar-venda.page';

describe('GerarVendaPage', () => {
  let component: GerarVendaPage;
  let fixture: ComponentFixture<GerarVendaPage>;
  let navController: NavController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GerarVendaPage],
      imports: [IonicModule.forRoot()],
      providers: [NavController],
    }).compileComponents();

    fixture = TestBed.createComponent(GerarVendaPage);
    component = fixture.componentInstance;
    navController = TestBed.inject(NavController);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Adicionar produto a cesta', () => {
    const productId = 1;

    component.insertCart(productId);

    expect(component.cart).toContain(productId);
  });

  it('Remover o produto da cesta', () => {
    const productId = 2;
    component.cart = [1, 2, 3];

    component.insertCart(productId);

    expect(component.cart).not.toContain(productId);
  });
});

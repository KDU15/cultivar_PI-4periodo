import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PedidosPage } from './pedidos.page';

describe('PedidosPage', () => {
  let component: PedidosPage;
  let fixture: ComponentFixture<PedidosPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PedidosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Renderizar uma lista de pedidos', () => {
    const pedidoElements = fixture.nativeElement.querySelectorAll('.pedido');
    expect(pedidoElements.length).toBe(component.pedidos.length);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CestaPage } from './cesta.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

describe('CestaPage', () => {
  let component: CestaPage;
  let fixture: ComponentFixture<CestaPage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [CestaPage],
      imports: [ReactiveFormsModule, IonicModule.forRoot(), FormsModule]
    }).compileComponents();
  }));

  beforeEach((() => {
    fixture = TestBed.createComponent(CestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

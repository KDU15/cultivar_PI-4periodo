import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { ConfirmarVendaPageRoutingModule } from './confirmar-venda-routing.module';

import { ConfirmarVendaPage } from './confirmar-venda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarVendaPageRoutingModule,
    ModalController
  ],
  declarations: [ConfirmarVendaPage]
})
export class ConfirmarVendaPageModule {}

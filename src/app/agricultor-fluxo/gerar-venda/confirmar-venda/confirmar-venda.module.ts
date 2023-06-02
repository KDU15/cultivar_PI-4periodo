import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarVendaPageRoutingModule } from './confirmar-venda-routing.module';

import { ConfirmarVendaPage } from './confirmar-venda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarVendaPageRoutingModule
  ],
  declarations: [ConfirmarVendaPage]
})
export class ConfirmarVendaPageModule {}

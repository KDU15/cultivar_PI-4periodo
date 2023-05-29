import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerarVendaPageRoutingModule } from './gerar-venda-routing.module';

import { GerarVendaPage } from './gerar-venda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerarVendaPageRoutingModule
  ],
  declarations: [GerarVendaPage]
})
export class GerarVendaPageModule {}

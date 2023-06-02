import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCodeVendaPageRoutingModule } from './qr-code-venda-routing.module';

import { QrCodeVendaPage } from './qr-code-venda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodeVendaPageRoutingModule
  ],
  declarations: [QrCodeVendaPage]
})
export class QrCodeVendaPageModule {}

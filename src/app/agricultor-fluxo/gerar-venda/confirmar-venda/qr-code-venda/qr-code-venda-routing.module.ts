import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrCodeVendaPage } from './qr-code-venda.page';

const routes: Routes = [
  {
    path: '',
    component: QrCodeVendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCodeVendaPageRoutingModule {}

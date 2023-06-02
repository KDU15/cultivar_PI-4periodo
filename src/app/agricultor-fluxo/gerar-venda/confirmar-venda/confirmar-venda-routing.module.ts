import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarVendaPage } from './confirmar-venda.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarVendaPage
  },
  {
    path: 'qr-code-venda',
    loadChildren: () => import('./qr-code-venda/qr-code-venda.module').then( m => m.QrCodeVendaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarVendaPageRoutingModule {}

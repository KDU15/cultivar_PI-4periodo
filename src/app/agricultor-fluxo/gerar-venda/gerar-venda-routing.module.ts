import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerarVendaPage } from './gerar-venda.page';

const routes: Routes = [
  {
    path: '',
    component: GerarVendaPage
  },
  {
    path: 'confirmar-venda',
    loadChildren: () => import('./confirmar-venda/confirmar-venda.module').then( m => m.ConfirmarVendaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerarVendaPageRoutingModule {}

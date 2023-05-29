import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerarVendaPage } from './gerar-venda.page';

const routes: Routes = [
  {
    path: '',
    component: GerarVendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerarVendaPageRoutingModule {}

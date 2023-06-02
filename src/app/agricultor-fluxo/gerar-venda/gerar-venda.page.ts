import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gerar-venda',
  templateUrl: './gerar-venda.page.html',
  styleUrls: ['./gerar-venda.page.scss'],
})
export class GerarVendaPage implements OnInit {

  arrayId: any = [1, 2, 3, 4, 5, 6, 7, 8];

  cart: any = [];

  constructor() { }

  ngOnInit() {
    
  }

  prodNoCart(item: any): boolean {
    return this.cart.includes(item);
  }
  
  insertCart(id: any) {
    const index = this.cart.indexOf(id);
  
    if (index > -1) {
      this.cart.splice(index, 1); // Remove o produto do carrinho se já estiver presente
    } else {
      this.cart.push(id); // Adiciona o produto ao carrinho se não estiver presente
    }
  
    console.log(this.cart);
  }

}

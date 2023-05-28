import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  categoria: any;

  constructor() { }

  ngOnInit() {
  }

  setCategoria(id: any){
    this.categoria = id;
    console.log(id, this.categoria);
  }

}

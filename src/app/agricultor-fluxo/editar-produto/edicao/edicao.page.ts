import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.page.html',
  styleUrls: ['./edicao.page.scss'],
})
export class EdicaoPage implements OnInit {

  categoria: any;

  constructor() { }

  ngOnInit() {
  }

  setCategoria(id: any){
    this.categoria = id;
  }
}

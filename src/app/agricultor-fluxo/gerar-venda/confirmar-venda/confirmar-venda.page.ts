import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-venda',
  templateUrl: './confirmar-venda.page.html',
  styleUrls: ['./confirmar-venda.page.scss'],
})
export class ConfirmarVendaPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  formaComp: any = 'und';

  ngOnInit() {
  }

  cancel(){
    this.modalCtrl.dismiss();
  }

}

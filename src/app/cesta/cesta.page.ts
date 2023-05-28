import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.page.html',
  styleUrls: ['./cesta.page.scss'],
})
export class CestaPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  formaComp: any = 'und';

  ngOnInit() {
  }

  cancel(){
    this.modalCtrl.dismiss();
  }

}

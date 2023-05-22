import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private load: LoadingController) { }

  async presentLoading() {
    const loading = await this.load.create({
      spinner: 'crescent', // escolha um estilo de spinner adequado aqui
      cssClass: 'loading-class',
      translucent: false,
      backdropDismiss: true,
      showBackdrop: true,
      animated: true
    });

    await loading.present();
  }

  dismiss(){
    this.load.dismiss();
  }

}

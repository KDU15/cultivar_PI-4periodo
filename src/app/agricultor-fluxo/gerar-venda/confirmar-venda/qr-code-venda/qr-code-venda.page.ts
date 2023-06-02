import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-qr-code-venda',
  templateUrl: './qr-code-venda.page.html',
  styleUrls: ['./qr-code-venda.page.scss'],
})
export class QrCodeVendaPage implements OnInit {

  constructor(private http: HttpClient, private auth: AuthService) { }

  codPix!: string;

  nome!: string;
  cidade!: string;
  chave: any;

  ngOnInit() {
    const pixKey = '712.408.424-57';
    const amount = 100.00;

    this.codPix = `PIX${pixKey}?amount=${amount}`;

    QRCode.toCanvas(document.getElementById('pix-qrcode'), this.codPix, function (error) {
      if (error) {
        console.error(error);
      } 
      else {
        console.log('QR Code de PIX gerado');
      }
    });

  }
  
  pixGenerate(){

    if(this.nome !== null && this.cidade !== null && this.chave !== null){
      this.http.get(`https://gerarqrcodepix.com.br/api/v1?nome=Cecília Devêza&cidade=Ouro Preto&saida=qr&chave=2aa96c40-d85f-4b98-b29f-d158a1c45f7f`).subscribe((data: any) =>{
        console.log(data)
      }, (error: any) =>{
        console.log(error);
        
      })
    }
    else{
      console.log('fudeu')
    }
  }


  copy(): void {
    const textField = document.createElement('textarea');
    textField.value = this.codPix;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    document.body.removeChild(textField);
  }

}

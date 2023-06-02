import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as QRCode from 'qrcode';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-qr-code-venda',
  templateUrl: './qr-code-venda.page.html',
  styleUrls: ['./qr-code-venda.page.scss'],
})
export class QrCodeVendaPage implements OnInit {

  constructor(private http: HttpClient, private auth: AuthService, private route: Router) { }

  codPix!: string;

  nome!: string;
  cidade!: string;
  chave: any;
  valor!:string;

  ngOnInit() {

  }
  
  pixGenerate(){

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    const params = new URLSearchParams({
      nome: this.nome,
      cidade: this.cidade,
      saida: 'br',
      chave: this.chave,
      valor: this.valor
    });
    
    if(this.nome !== null && this.cidade !== null && this.chave !== null){
      this.http.get(proxyUrl + 'https://gerarqrcodepix.com.br/api/v1?' + params).subscribe((data: any) =>{
        this.codPix = data.brcode;

        QRCode.toCanvas(document.getElementById('pix-qrcode'), this.codPix, function (error) {
          if (error) {
            console.error(error);
          } 
          else {
            console.log('QR Code de PIX gerado');
          }
        });

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

  back(){
    this.codPix = '';
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  loginRequest(login: string, password: string){

    const httpOptions = {
      headers : new Headers({

      })
    }

    return this.http.post('', {})
  }

  setPix(nome: any, cidade: any, saida: any, chave: string) {
    const pix = {
      nome: nome,
      cidade: cidade,
      saida: saida,
      chave: chave
    }

    sessionStorage.setItem('pix', JSON.stringify(pix));
  }

  getPix(){
    return JSON.parse(sessionStorage.getItem('pix')!);
  }
}

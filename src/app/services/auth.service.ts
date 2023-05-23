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
}

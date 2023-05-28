import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cep!: number;
  state!: string;
  city!: string;
  neighborhood!: string;
  street: any;

  constructor(
    private router: Router,
    private http: HttpClient) { }

  cadForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    neighborhood: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    isfarmer: new FormControl(''),
  });

  ngOnInit() {
  }

  consulta(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
  
    if (inputValue.length === 8) {
        this.consultaCep(inputValue).subscribe((data: any) => {

          this.state = data.state;
          this.city = data.city;
          this.neighborhood = data.neighborhood;
          this.street = data.street;
          console.log(data)
      
        }, (error: any) => { console.log('fudeu', error) })
    }
  }

  consultaCep(cep: any) {
    return this.http.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
  };

  finalizar(){
    this.router.navigateByUrl('/login')
  }
}

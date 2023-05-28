import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  olhoMagico: boolean = false;
  olhoMagIcon: string = 'eye-off-outline';

  constructor(
    private load: LoadingService,
    private router: Router,
    private auth: AuthService) { }

    loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  ngOnInit() {
  }

  tPassword(){
    if(this.olhoMagico == false){
      this.olhoMagico = true;
      this.olhoMagIcon = 'eye-outline';
    }
    else{
      this.olhoMagico = false;
      this.olhoMagIcon = 'eye-off-outline';
    }
  }

  entrar(){

    this.auth.loginRequest(this.loginForm.value.login!, this.loginForm.value.password!).subscribe((data: any) =>{

    }, error =>{
      console.log(error);
      
    })

    this.load.presentLoading();
    setTimeout(() => {
      this.router.navigateByUrl('tabs');
      this.load.dismiss()
    }, 1200);

  }

}

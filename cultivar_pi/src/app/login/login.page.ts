import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private load: LoadingService,
    private router: Router) { }

  ngOnInit() {
  }

  entrar(){
    this.load.presentLoading();
    setTimeout(() => {
      this.router.navigateByUrl('tabs');
      this.load.dismiss()
    }, 1200);
  }

}

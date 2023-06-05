import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.page.html',
  styleUrls: ['./introducao.page.scss'],
})
export class IntroducaoPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }

  goToCadPage() {
    this.router.navigateByUrl('/cadastro');
  }
}

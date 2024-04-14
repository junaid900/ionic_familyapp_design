import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  hidePassword: boolean = true;
  password: string = '';
  constructor(
    private menuCtrl: MenuController
  ) { 
  }
  ionViewDidEnter(){
    // this.menuCtrl.enable(false, 'drawer-menu')
  }

  ngOnInit() {
  }
  showPassword(){
    // console.log("show password");
    console.log(this.password);
    this.hidePassword = !this.hidePassword;
  }
}

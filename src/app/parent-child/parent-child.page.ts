import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.page.html',
  styleUrls: ['./parent-child.page.scss'],
})
export class ParentChildPage implements OnInit {

  constructor(private navCtrl: NavController,
   private menuController: MenuController) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.back();
  }
  async openDrawer(){
    this.menuController.get("main-menu").then((menu) => {
      menu?.open();
    });
  }

}

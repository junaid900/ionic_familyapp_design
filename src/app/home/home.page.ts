import { Component, WritableSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: WritableSignal<Array<any>> = signal([{
    name: "Honey lime combo",
    isFav: false,
    price: "2,000",
  }, {
    name: "Honey lime combo",
    isFav: true,
    price: "2,000"
  }]);

  constructor(
    private router: Router,
    private menuController: MenuController
  ) { }

  handleItem(item: any){
    this.router.navigate(['checkout']);
  }
  async openDrawer(){
    this.menuController.get("main-menu").then((menu) => {
      menu?.open();
    });
  }

}

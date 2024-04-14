import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent  implements OnInit {
  itemCount: number = 1;
  constructor() { }

  ngOnInit() {}
  addCount(){
    this.itemCount++;
  }
  removeCount(){
    if(this.itemCount > 1){
      this.itemCount--;
    }
  }
}

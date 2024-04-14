import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss'],
})
export class HomeItemComponent implements OnInit {
  @Input({ required: true })
  isCard: boolean = true;
  @Input({ required: true })
  isFav: boolean = false;
  constructor() { }

  ngOnInit() { }

}

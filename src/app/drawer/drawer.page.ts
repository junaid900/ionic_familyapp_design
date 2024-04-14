import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.page.html',
  styleUrls: ['./drawer.page.scss'],
})
export class DrawerPage implements OnInit {
  public appPages = [
    { title: 'Home', url: '/drawer/home', icon: 'home' },
    { title: 'Parent Child', url: '/drawer/parent-child', icon: 'people' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  ngOnInit() {
  }

}

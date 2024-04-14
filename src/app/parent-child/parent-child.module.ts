import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentChildPageRoutingModule } from './parent-child-routing.module';

import { ParentChildPage } from './parent-child.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentChildPageRoutingModule
  ],
  declarations: [ParentChildPage]
})
export class ParentChildPageModule {}

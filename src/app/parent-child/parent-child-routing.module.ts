import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentChildPage } from './parent-child.page';

const routes: Routes = [
  {
    path: '',
    component: ParentChildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentChildPageRoutingModule {}

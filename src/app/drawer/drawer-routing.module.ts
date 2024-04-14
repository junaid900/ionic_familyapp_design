import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawerPage } from './drawer.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: DrawerPage,
    children: [{
      path: 'home',
      loadChildren: () => import('../home/home-routing.module').then( m => m.HomePageRoutingModule),
      //pathMatch: true,
    },{
      path: 'parent-child',
      loadChildren: () => import('../parent-child/parent-child.module').then( m => m.ParentChildPageModule),
      //pathMatch: true,
    },{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }]
  },
  // {
  //   path: '',
  //   redirectTo: 'pages',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawerPageRoutingModule { }

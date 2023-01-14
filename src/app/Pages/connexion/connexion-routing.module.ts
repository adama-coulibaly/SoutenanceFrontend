import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionPage } from './connexion.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionPage
  },
  // {
  //   path: 'bottom-bar',
  //   loadChildren: () => import('../../Pages/bottom-bar/bottom-bar.module').then(m => m.BottomBarPageModule)

  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionPageRoutingModule {}

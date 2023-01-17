import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage
  },
  {
    path: 'ferme/:idferme',
    loadChildren: () => import('../ferme/ferme.module').then( m => m.FermePageModule)
  },
  // {
  //   path: 'ferme/:idferme',
  //   loadChildren: () => import('../ferme/ferme.module').then( m => m.FermePageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}

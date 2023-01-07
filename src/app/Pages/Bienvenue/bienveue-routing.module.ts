import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienveuePage } from './bienveue.page';

const routes: Routes = [
  {
    path: '',
    component: BienveuePage
  },
  {
    path: 'connexion',
    loadChildren: () => import('../connexion/connexion.module').then( m => m.ConnexionPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienveuePageRoutingModule {}

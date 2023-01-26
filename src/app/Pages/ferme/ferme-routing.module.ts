import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FermePage } from './ferme.page';

const routes: Routes = [
  {
    path: '',
    component: FermePage
  },
  {
    path: 'detail-production',
    loadChildren: () => import('../../Pages/detail-production/detail-production.module').then( m => m.DetailProductionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FermePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormationPage } from './formation.page';

const routes: Routes = [
  {
    path: '',
    component: FormationPage
  },
  {
    path: 'detail-formation/:id',
    loadChildren: () => import('../../details-formation/details-formation.module').then(m => m.DetailsFormationPageModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormationPageRoutingModule {}

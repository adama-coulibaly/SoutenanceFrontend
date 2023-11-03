import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsFormationPage } from './details-formation.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsFormationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsFormationPageRoutingModule {}

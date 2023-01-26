import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailProductionPage } from './detail-production.page';

const routes: Routes = [
  {
    path: '',
    component: DetailProductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailProductionPageRoutingModule {}

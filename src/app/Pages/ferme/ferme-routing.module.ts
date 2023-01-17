import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FermePage } from './ferme.page';

const routes: Routes = [
  {
    path: '',
    component: FermePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FermePageRoutingModule {}

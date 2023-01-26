import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValiderCommendePage } from './valider-commende.page';

const routes: Routes = [
  {
    path: '',
    component: ValiderCommendePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValiderCommendePageRoutingModule {}

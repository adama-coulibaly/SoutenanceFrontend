import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotdepasseoublierPage } from './motdepasseoublier.page';

const routes: Routes = [
  {
    path: '',
    component: MotdepasseoublierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotdepasseoublierPageRoutingModule {}

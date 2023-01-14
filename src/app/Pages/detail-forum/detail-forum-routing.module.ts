import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailForumPage } from './detail-forum.page';

const routes: Routes = [
  {
    path: '',
    component: DetailForumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailForumPageRoutingModule {}

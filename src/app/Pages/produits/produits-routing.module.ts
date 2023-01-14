import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitsPage } from './produits.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitsPage
  },
  {
    path: 'accueil',
    loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilPageModule)


  },
  // {
  //   path: 'forum',
  //   loadChildren: () => import('../forum/forum.module').then(m => m.ForumPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitsPageRoutingModule {}

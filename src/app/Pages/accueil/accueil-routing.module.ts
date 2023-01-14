import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab, faFortAwesome } from '@fortawesome/free-brands-svg-icons'

import { AccueilPage } from './accueil.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage
  },
  //  {
  //   path: 'forum',
  //   loadChildren: () => import('../forum/forum.module').then( m => m.ForumPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes),FontAwesomeModule],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule {}

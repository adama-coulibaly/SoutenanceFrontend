import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'bottom-bar',
    pathMatch: 'full'
  }
  ,
  {
    path: 'bottom-bar',
    loadChildren: () => import('./bottom-bar/bottom-bar.module').then( m => m.BottomBarPageModule)
  },
 
  {
    path: 'bienveue',
    loadChildren: () => import('./Pages/Bienvenue/bienveue.module').then( m => m.BienveuePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./Pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./Pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./Pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  }
  ,
  {
    path: 'forum',
    loadChildren: () => import('./Pages/forum/forum.module').then( m => m.ForumPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

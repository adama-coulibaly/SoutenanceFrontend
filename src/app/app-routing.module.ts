import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bienvenue',
   loadChildren: () => import('./Pages/Bienvenue/bienveue.module').then( m => m.BienveuePageModule)
  },
  {
    path: '',
    redirectTo: 'bienvenue',
    pathMatch: 'full'
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
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

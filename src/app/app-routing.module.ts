import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./Pages/bottom-bar/bottom-bar.module').then(m => m.BottomBarPageModule)

  },

  //  {
  //   path: '',
  //   redirectTo: 'bienveue',
  //   pathMatch: 'full'
  // }
  // ,
  // {
  //   path: 'bottom-bar',
  //   loadChildren: () => import('./bottom-bar/bottom-bar.module').then( m => m.BottomBarPageModule)
  // },


  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
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
    path: 'motdepasseoublier',
    loadChildren: () => import('./Pages/motdepasseoublier/motdepasseoublier.module').then( m => m.MotdepasseoublierPageModule)
  },
  // {
  //   path: 'formation',
  //   loadChildren: () => import('./Pages/formation/formation.module').then( m => m.FormationPageModule)
  // },


  // {
  //   path: 'ferme',
  //   loadChildren: () => import('./Pages/ferme/ferme.module').then( m => m.FermePageModule)
  // },

  // {
  //   path: 'profil',
  //   loadChildren: () => import('./Pages/profil/profil.module').then( m => m.ProfilPageModule)
  // },

  // {
  //   path: 'produits',
  //   loadChildren: () => import('./Pages/produits/produits.module').then( m => m.ProduitsPageModule)
  // }






  // {
  //   path: 'connexion',
  //   loadChildren: () => import('./Pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  // },
  // {
  //   path: 'accueil',
  //   loadChildren: () => import('./Pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  // }
  // ,
  // {
  //   path: 'forum',
  //   loadChildren: () => import('./Pages/forum/forum.module').then( m => m.ForumPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

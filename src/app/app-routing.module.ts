import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./Pages/bottom-bar/bottom-bar.module').then(m => m.BottomBarPageModule)

  },


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
  {
    path: 'inscription',
    loadChildren: () => import('./Pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'valider-commende',
    loadChildren: () => import('./Pages/valider-commende/valider-commende.module').then( m => m.ValiderCommendePageModule)
  },
  {
    path: 'details-formation',
    loadChildren: () => import('./details-formation/details-formation.module').then( m => m.DetailsFormationPageModule)
  },
 
  // {
  //   path: 'detail-production',
  //   loadChildren: () => import('./Pages/detail-production/detail-production.module').then( m => m.DetailProductionPageModule)
  // },


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

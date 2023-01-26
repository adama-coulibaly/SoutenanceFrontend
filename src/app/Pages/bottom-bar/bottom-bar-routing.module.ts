import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardsGuard } from 'src/app/guards.guard';

import { BottomBarPage } from './bottom-bar.page';

const routes: Routes = [


{
  path: 'bottom-bar',
  component: BottomBarPage,
      children: [
       
        {
          path: 'accueil',
          loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilPageModule)
        },
        {
          path: 'forum',
          loadChildren: () => import('../forum/forum.module').then(m => m.ForumPageModule)
        },
        {
          path: 'produits',
          loadChildren: () => import('../produits/produits.module').then( m => m.ProduitsPageModule)
        },
        {
          path: 'formation',
          loadChildren: () => import('../formation/formation.module').then( m => m.FormationPageModule)
        },
        {
          path: 'profil',
          loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule),canActivate: [GuardsGuard]
        },
        {
          path: 'detail-production',
          loadChildren: () => import('../../Pages/detail-production/detail-production.module').then( m => m.DetailProductionPageModule)
        },
       
      ]
    },
   
    {
      path: '',
      redirectTo: '/bottom-bar/accueil',
      pathMatch: 'full'
    },


{
  path: '',
  redirectTo: '/bottom-bar/accueil',
  pathMatch: 'full'
}













  
  // {
  //   path: '',
  //   component: BottomBarPage,
  //   children:[
  //     {
  //       path:'accueil',
  //       children:[
  //         {
  //           path:'',
  //           loadChildren:() => import('../Pages/accueil/accueil.module').then(m=>m.AccueilPageModule)
  //         }
  //       ]
  //     },

  //     {
  //       path:'forum',
  //       children:[
  //         {
  //           path:'',
  //           loadChildren:() => import('../Pages/forum/forum.module').then(m=>m.ForumPageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path:'bienveue',
  //       children:[
  //         {
            
  //             path: '',
  //              loadChildren: () => import('../Pages/Bienvenue/bienveue.module').then( m => m.BienveuePageModule)
             
  //         }
  //       ]
  //     },

  //     {
  //       path: '',
  //       redirectTo: 'accueil',
  //       pathMatch: 'full'
  //     },


  //   ]
  // },

  // {
  //   path: '',
  //   redirectTo: 'bienvenue',
  //   pathMatch: 'full'
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomBarPageRoutingModule {}

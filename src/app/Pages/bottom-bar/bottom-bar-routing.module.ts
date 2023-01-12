import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomBarPage } from './bottom-bar.page';

const routes: Routes = [


{
  path: '',
  component: BottomBarPage,
  children: [
    {
      path: 'accueil',
      children: [
        {
          path: '',
          loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilPageModule)
        }
      ]
    },

    {
      path: '',
      loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilPageModule)
    },
    {
      path: 'forum',
      loadChildren: () => import('../forum/forum.module').then(m => m.ForumPageModule)
    },
   
    {
      path: '',
      redirectTo: '../Pages/Bienvenue',
      pathMatch: 'full'
    }
  ]
},
{
  path: '',
  redirectTo: 'BottomBarPage',
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

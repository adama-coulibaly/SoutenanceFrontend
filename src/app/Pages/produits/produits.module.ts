import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsPageRoutingModule } from './produits-routing.module';

import { ProduitsPage } from './produits.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
declarations: [ProduitsPage],
imports: [
CommonModule,
FormsModule,
IonicModule,
ProduitsPageRoutingModule,

]
})
export class ProduitsPageModule {}








// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { IonicModule, MenuController } from '@ionic/angular';

// import { ProduitsPageRoutingModule } from './produits-routing.module';

// import { ProduitsPage } from './produits.page';
// import { MenuComponent } from '../menu/menu.component';


// @NgModule({
//     declarations: [ProduitsPage,],
//     imports: [
//         CommonModule,
//         FormsModule,
//         IonicModule,
//         ProduitsPageRoutingModule,
//         MenuComponent
//     ]
// })
// export class ProduitsPageModule {}


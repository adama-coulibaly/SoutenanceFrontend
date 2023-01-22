import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProduitsPageModule } from "../produits/produits.module";
import { MenuComponent } from '../menu/menu.component';

@NgModule({
    declarations: [AccueilPage,MenuComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccueilPageRoutingModule,
    ]
})
export class AccueilPageModule {}

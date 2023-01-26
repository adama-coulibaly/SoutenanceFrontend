import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValiderCommendePageRoutingModule } from './valider-commende-routing.module';

import { ValiderCommendePage } from './valider-commende.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValiderCommendePageRoutingModule
  ],
  declarations: [ValiderCommendePage]
})
export class ValiderCommendePageModule {}

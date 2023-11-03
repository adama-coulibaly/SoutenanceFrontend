import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsFormationPageRoutingModule } from './details-formation-routing.module';

import { DetailsFormationPage } from './details-formation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsFormationPageRoutingModule
  ],
  declarations: [DetailsFormationPage]
})
export class DetailsFormationPageModule {}

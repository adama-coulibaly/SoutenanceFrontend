import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProductionPageRoutingModule } from './detail-production-routing.module';

import { DetailProductionPage } from './detail-production.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProductionPageRoutingModule
  ],
  declarations: [DetailProductionPage]
})
export class DetailProductionPageModule {}

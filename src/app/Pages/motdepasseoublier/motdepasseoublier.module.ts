import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotdepasseoublierPageRoutingModule } from './motdepasseoublier-routing.module';

import { MotdepasseoublierPage } from './motdepasseoublier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotdepasseoublierPageRoutingModule
  ],
  declarations: [MotdepasseoublierPage]
})
export class MotdepasseoublierPageModule {}

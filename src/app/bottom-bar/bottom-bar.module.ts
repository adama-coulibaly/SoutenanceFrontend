import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottomBarPageRoutingModule } from './bottom-bar-routing.module';

import { BottomBarPage } from './bottom-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottomBarPageRoutingModule
  ],
  declarations: [BottomBarPage]
})
export class BottomBarPageModule {}

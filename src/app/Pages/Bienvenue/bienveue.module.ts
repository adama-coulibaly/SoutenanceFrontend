import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienveuePageRoutingModule } from './bienveue-routing.module';

import { BienveuePage } from './bienveue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienveuePageRoutingModule
  ],
  declarations: [BienveuePage]
})
export class BienveuePageModule {}

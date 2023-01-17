import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FermePageRoutingModule } from './ferme-routing.module';

import { FermePage } from './ferme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FermePageRoutingModule
  ],
  declarations: [FermePage]
})
export class FermePageModule {}

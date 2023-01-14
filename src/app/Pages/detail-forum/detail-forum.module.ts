import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailForumPageRoutingModule } from './detail-forum-routing.module';

import { DetailForumPage } from './detail-forum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailForumPageRoutingModule
  ],
  declarations: [DetailForumPage]
})
export class DetailForumPageModule {}

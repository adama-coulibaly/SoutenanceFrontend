import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumPageRoutingModule } from './forum-routing.module';

import { ForumPage } from './forum.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MenuComponent,  } from '../menu/menu.component';

@NgModule({
    declarations: [ForumPage,],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ForumPageRoutingModule,
        Ng2SearchPipeModule,
        
    ]
})
export class ForumPageModule {}

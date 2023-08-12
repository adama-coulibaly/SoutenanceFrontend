import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, PopoverController } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PanierComponent } from './panier/panier.component';
import { CompteUserComponent } from './Pages/compte-user/compte-user.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { IonIntlTelInputModule } from 'ion-intl-tel-input';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { InfosComponent } from './infos/infos.component';
import { NotificationComponent } from './Pages/notification/notification.component';
import { DetailProductionComponent } from './detail-production/detail-production.component';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
import { SplashScreenPageModule } from './splash-screen/splash-screen.module';







@NgModule({
  declarations: [AppComponent,PanierComponent,CompteUserComponent,InfosComponent,NotificationComponent,DetailProductionComponent],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     FontAwesomeModule,
     HttpClientModule,
     Ng2SearchPipeModule,
     FormsModule,
     IonIntlTelInputModule,
     SplashScreenPageModule
    
   

    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },InAppBrowser,YoutubeVideoPlayer],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PanierComponent } from './panier/panier.component';
import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';






@NgModule({
  declarations: [AppComponent,PanierComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FontAwesomeModule,HttpClientModule,Ng2SearchPipeModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },InAppBrowser,FirebaseX],
  bootstrap: [AppComponent],
})
export class AppModule {}

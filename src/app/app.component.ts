import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initialize } from '@ionic/core';
import { TokenStorageService } from './Services/token-storage.service';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  user: any;
  constructor(public router:Router,private tokenStorage:TokenStorageService) {
    //  this.initializeApp();
  }
  ngOnInit(): void {

    SplashScreen.show({
      autoHide: true,
      showDuration: 5000,
    });


    // throw new Error('Method not implemented.');
    this.user = this.tokenStorage.getUser();
    console.log("je suis "+this.user.id)
    if(this.user.id != null){
      this.router.navigate(['/bottom-bar/accueil']);
    }
    else{
      this.router.navigateByUrl("connexion")
     
    }

   

  }
  ionViewDidEnter() {
    SplashScreen.hide();
  }

  initializeApp(){
    this.router.navigateByUrl("splash-screen")
  }


}

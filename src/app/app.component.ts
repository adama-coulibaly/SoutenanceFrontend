import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';
import { initialize } from '@ionic/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router:Router,private firebaseX:FirebaseX) {
    //  this.initializeApp();

//     this.firebaseX.getToken()
//   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
//   .catch(error => console.error('Error getting token', error));

// this.firebaseX.onMessageReceived()
//   .subscribe(data => console.log(`User opened a notification ${data}`));

// this.firebaseX.onTokenRefresh()
//   .subscribe((token: string) => console.log(`Got a new token ${token}`));
  }

  initializeApp(){
    this.router.navigateByUrl("splash-screen")
  }
}

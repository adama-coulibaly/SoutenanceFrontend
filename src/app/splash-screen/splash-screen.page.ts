import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/login-services.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  [x: string]: any;
  roles: any;

  constructor(private router:Router,private tokenStorage: TokenStorageService) { setTimeout(()=>{ 
    this.roles = this.tokenStorage.getUser().id;
    if(this.roles){ this.router.navigateByUrl('bottom-bar/accueil'); }else{this.router.navigateByUrl('bienveue');}
    

},2000)}

  ngOnInit() {
    
  }

}

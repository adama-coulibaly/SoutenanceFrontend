import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/login-services.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  // ICI ON PREND LES ELEMENTS POUR LE FORMULAIRE
  form: any = {
    usernameOrEmail: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];



  constructor(private route:Router,private authService:AuthService,private tokenStorage: TokenStorageService) { }

Message!:String 

  ngOnInit() {
    // this.loadData();
    // if(this.tokenStorage.getUser().id != null){
    //   this.route.navigateByUrl("bottom-bar/accueil");
    // }
  }

//   ionViewWillEnter() {
    
// }
  loadData() {
   this.route.navigateByUrl('/connexion')
  }

// =========================================================== CONNEXION =====================================================
  onSubmit(): void {
    const { usernameOrEmail, password } = this.form;

    this.authService.login(usernameOrEmail, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        if(this.isLoggedIn == true){  
          
        this.route.navigateByUrl("bottom-bar/accueil");
      
        }
        else{
          this.isLoginFailed = true;
        }
      },
      err => { this.isLoginFailed = true;
        this.errorMessage = err.error.message;
       
      }
    );
  }

}

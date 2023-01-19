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
  }




  onSubmit(): void {
    const { usernameOrEmail, password } = this.form;

    this.authService.login(usernameOrEmail, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
        if(this.isLoggedIn == true)
           this.route.navigateByUrl("bottom-bar/accueil");
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  // connexion(form: any){
  //   if(form.value.email == "coulibalyadamabekaye03@gmail.com" && form.value.password == "123456"){
  //        alert("Connexion reussie avec succès")
  //        this.route.navigateByUrl("/bottom")
  //   }
  //   else{
  //     this.Message = "Donnés incorrectes"
  //   }
  

}

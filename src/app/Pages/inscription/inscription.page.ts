import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/login-services.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  form: any = {
    nom: "",
    prenom: " ",
    email: "",
    roles: "",
    password: "",
    adresse: "",
    username: ""
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = 'A';

  form2: any = {
    nom: "",
    prenom: " ",
    email: "",
    roles: "",
    password: "",
    adresse: "",
    username: ""
  };


  constructor(private authService: AuthService) { }


  ngOnInit() {
  }


  onSubmit(): void {
    // LA METHODE DE VERIFICATION DES MOTS DE PASSE N'EST PAS GERE D'ABORD
    const { nom, prenom,adresse, username, email, password } = this.form;

//     console.log("Je suis "+this.form)
// this.form2.nom = this.form.nom ;
// this.form2.prenom = this.form.nom ;
// this.form2.adresse = this.form.nom ;
// this.form2.username = this.form.nom ;
// this.form2.email = this.form.nom ;
// this.form2.password = this.form.nom ;
alert("A "+this.form2)
    this.authService.registerO(nom,prenom,username,email,password,adresse).subscribe({
        next: data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      }
    );
  }
}

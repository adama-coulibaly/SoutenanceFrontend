import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/login-services.service';
import Swal from 'sweetalert2';

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
  success: any;
// ====== LA VARIABLE POUR CACHER ET AFFICHER
  isVisible = true;
  erreur: any;

  constructor(private authService: AuthService,private router:Router) { }


  ngOnInit() {
  }

  // ===================================================LA METHODE SUIVANTE
  Suivant(){
    this.isVisible = false
  }
  Retour(){
    this.isVisible = true
  }

  onSubmit(): void {
    // LA METHODE DE VERIFICATION DES MOTS DE PASSE N'EST PAS GERE D'ABORD
    const { nom, prenom, adresse, username, email, password } = this.form;

    this.authService.registerO(nom, prenom, username, email, password, adresse).subscribe(
      data => {
        this.success = data
        if (this.success.status = true)
         {
          Swal.fire({
            heightAuto: false,
           // position: 'top-end',
            icon: 'success',
            text: 'Compte créer avec succès',
            showConfirmButton: false,
            timer: 2500
              })
              this.router.navigateByUrl('/connexion')
         }
        if(this.success.status = false) {
          this.erreur = this.success.message
        }
      }
    );
  }
}

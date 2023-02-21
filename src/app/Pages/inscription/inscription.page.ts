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
    username: "",
    idstatus:""
  };


usern = ''

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = 'A';
  section1 = ''

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
  mesStatus: any;
  valeurSelet : any

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
    this.authService.lesStatus().subscribe(data=>{
      this.mesStatus = data
    })
  }

  // ===================================================LA METHODE SUIVANTE
  Suivant() {
    const { nom, prenom, adresse, username, email, password } = this.form;

    if (nom == "" || prenom == "" || username == " " || email == "") {
      this.isVisible = true
      this.section1 = "Veuillez remplir tous les champs"

    }
    else {
      this.section1 = ""
      this.isVisible = false
    }
  }
  Retour() {
    this.isVisible = true
  }

  onSubmit(): void {
    // LA METHODE DE VERIFICATION DES MOTS DE PASSE N'EST PAS GERE D'ABORD
    const { nom, prenom, adresse, usernID, email, password,idstatus } = this.form;
   
    
    console.log("ID "+idstatus)

    if (this.form.password == this.form.pass2) {
      this.authService.registerO(nom, prenom, usernID.internationalNumber, email, password, adresse,idstatus).subscribe(
        data => {
          this.success = data
          if (this.success.status == true) {
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
          else{
            this.erreur = this.success.message
          }
        }
      );
    } else {
      this.erreur = "Mot de passe incorrect !"
    }


  }
}

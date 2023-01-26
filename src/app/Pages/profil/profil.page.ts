import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Ferme } from 'src/app/Models/Ferme';
import { FermeService } from 'src/app/Services/ferme.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  user: any;
  lesFermes: any;

  isSuccessful = false;
  isSignUpFailed = false;

  ferme:Ferme={
    idferme: undefined,
    nomferme: undefined,
    activiteferme: undefined,
    adresseferme: undefined,
    taille: undefined,
    imageferme: undefined,
    etat: undefined,
    User: undefined
  }
  form:any={
    idferme: '',
    nomferme: '',
    activiteferme: '',
    adresseferme: '',
    taille: '',
    file: '',
    etat: '',
    User: ''
  }
  file: any;
  resultat: any;
  nonValide: any;
  fileChangm(event: any) {
    this.file = event.target.files[0]
    console.log(this.file)
    }
  constructor(private tokenStorage: TokenStorageService, private fermeService: FermeService, private router:Router,public navCtrl: NavController) { }

  ngOnInit() {
    //  ICI ON RECUPERER L'UTILISATEUR CONNECTE
    this.user = this.tokenStorage.getUser();
    // MAINTENANT ON PREND LES FERMES D'UN SEUL UTILISATEUR
    if(this.user != ""){
 this.fermeService.mesFermes(this.user.id).subscribe(data => {
      this.lesFermes = data;
     // console.log("Je suis vraiment "+this.user.id)
    });
    }
    else{
      this.router.navigateByUrl('connexion')
    }
   


    
  }

    // ===============================================CETTE FONCTION PERMET DE DECONNECTER L'UTILISATEUR
  logout(): void {
    // console.log("Je suis cliquer")
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/connexion')
    // window.location.reload();

  }



  Adama = [1, 2, 3, 4, 5];

  // POUR FERMER LE MODAL 
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  // ==================================================================== AJOUT DE LA FERME

  onSubmit(){

    this.user = this.tokenStorage.getUser();

    const {nomferme, activiteferme, adresseferme, taille, file} = this.form;

    // console.log("Je suis le nomferme "+nomferme)
    // console.log("Je suis le activite "+activiteferme)
    // console.log("Je suis le adresse "+adresseferme),
    // console.log("Je suis le taille "+taille),
    // console.log("Je suis le file "+this.file)

    this.fermeService.ajouterFerme(this.user.id,nomferme,activiteferme,adresseferme,taille,this.file).subscribe(data=>{
      this.resultat = data
      if(this.resultat.status == true){
        Swal.fire({
          heightAuto: false,
          // position: 'top-end',
          icon: 'success',
          text: 'Ferme créée avec succès',
          showConfirmButton: false,
          timer: 2500
        })
        this.isModalOpen = false;
    
      }
      else{
        this.nonValide = this.resultat.message
      }


    })

  } refreshData() {
    this.navCtrl.navigateRoot("/bottom-bar/profil");
  }

}

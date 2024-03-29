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

  etats:boolean = false;
  monEtat: boolean = false;

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
      this.monEtat = true
      this.fermeService.mesFermes(this.user.id,this.monEtat).subscribe(data => {
      this.lesFermes = data;
            console.log("Je suis vraiment Etat "+this.etats)
    });
    }
    
   


    
  }

    // ===============================================CETTE FONCTION PERMET DE DECONNECTER L'UTILISATEUR
  logout(): void {
    // console.log("Je suis cliquer")
    this.tokenStorage.signOut();
        this.router.navigateByUrl('bottom-bar/accueil')
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
    
    this.fermeService.ajouterFerme(this.user.id,nomferme,activiteferme,adresseferme,taille,this.file).subscribe(data=>{
      this.resultat = data
      if(this.resultat.status == true){
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          text: 'Ferme créée avec succès',
          showConfirmButton: false,
          timer: 2500
        })
        this.isModalOpen = false;
        this.reloderLesDonnes();
      }
      else{
        this.nonValide = this.resultat.message
      }


    })

  } reloderLesDonnes() {
    if(this.user != ""){
      this.monEtat = true
      this.fermeService.mesFermes(this.user.id,this.monEtat).subscribe(data => {
      this.lesFermes = data;
    });
  }}

}

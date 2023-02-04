import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { PanierComponent } from 'src/app/panier/panier.component';
import { AccueilServiceService } from 'src/app/Services/accueil-service.service';
import { ThemeServiceService } from 'src/app/Services/theme-service.service';

import { AnimationController } from '@ionic/angular';
import { FormationServiceService } from 'src/app/Services/formation-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { Panier } from 'src/app/Models/panier';
import { PanierServiceService } from 'src/app/Services/panier-service.service';
import { ServigeGeneralService } from 'src/app/servige-general.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  panier:Panier = {
    idpanier: undefined,
    quantite: undefined,
    totalproduit: undefined,
    User: undefined,
    Produit: undefined
  }
  
monTableau1 = []

  lesproduits: any;
  lesFormation: any;
  uneformation: any;
  iab: any;
  isModalOpen = false;
  ouvrir=false
  unProd: any;
  lesF: any;
  addPanier: any;
  user: any;
  panierProd: any;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  Ouvrer(isOpen: boolean) {
    this.ouvrir = isOpen;
  }

    // ====================================================
    options={
      slidesPerView:1,   // NOMBRE DE SLIDE PAR PAGE = 1
      centeredSlider:true,
      loop:true,
      spaceBetween:10,
      autoplay:true
    }
  
    options2={
      slidesPerView:2,   // NOMBRE DE SLIDE PAR PAGE = 1
      centeredSlider:true,
      loop:true,
      // spaceBetween:1,
      autoplay:true
    }

  constructor(private serveGe:ServigeGeneralService,private panierService:PanierServiceService,private loadingCtrl:LoadingController,private tokenStorage: TokenStorageService,private router:Router, public navCtrl: NavController,private serviceAccueil:AccueilServiceService, private modalCtrl: ModalController,private animationCtrl: AnimationController,private serviceFormation:FormationServiceService) { }
  lesThemes:any;

  // ==============================================
  ionViewWillEnter() {
    // window.location.reload();
     }

  ngOnInit() {
    this.user = this.tokenStorage.getUser();
// ===================================================== RECUPERATION DES PRODUITS
     this.serviceAccueil.lesProduits().subscribe(data=>{
      this.lesproduits = data
     });

// ===================================================== RECUPERATION DES FORMATIONS

this.serviceFormation.deuxFormation().subscribe(data=>{
  this.lesFormation = data; 
});

this.serveGe.showImage.next(this.user.avatar); // CETTE METHODE PERMET DE FAIRE APPEL A NOTRE OBSERVABLE ICI   

    
  }

 //=============================================== ICI ON PREND UNE SEULE FORMATION
uneFormation(idformation:any){
  this.serviceFormation.lesFormationsParId(idformation).subscribe(data=>{
    this.uneformation = data
  })
}
// ============================================== ICI ON REDIRIGE VERS LE LIEN YOURUBE
  visiter(url:any){

    Swal.fire({
      heightAuto: false,
      // title: 'Are you sure?',
      text: "Vous serez rediriger vers Youtube",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#04CF72',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Continuer'
    }).then((result) => {
      if (result.isConfirmed) {
       this.iab.create(url)

      //  this.iab.create('https://www.youtube.com/channel/UCg13jYjmtpVZyZWthQ-g5Dg')
      }
    })
    
  } 

    // LISTER LES PRODUIT PAR LEURS ID
  unProduit(idproduit: any) {
    this.serviceAccueil.lesProduitsParID(idproduit).subscribe(data => {
      this.unProd = data
    })
  }
  // ICI ON AJOUTE UN PRODUITS DANS LE PANIER

  ajouterPaner(idproduit:number){
    this.serviceAccueil.ajouterAuPanier(this.panier,idproduit,this.user.id).subscribe(data=>{
      this.addPanier = data
      this.loadAddToCard();
      if(this.addPanier.status == true){
        this.showLoading()
      }
     
    })
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'En cours...',
      duration: 1000,
      spinner: 'circles',
    });

    loading.present();
  }
  
  loadAddToCard(){
    this.panierService.totalQuantite(this.user.id).subscribe(data=>{
      this.panierProd = data;
      this.serveGe.showValue.next(this.panierProd[0]); // CETTE METHODE PERMET DE FAIRE APPEL A NOTRE OBSERVABLE ICI   
    })
   }
   

}

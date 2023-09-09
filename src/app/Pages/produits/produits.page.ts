import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Panier } from 'src/app/Models/panier';
import { AccueilServiceService } from 'src/app/Services/accueil-service.service';
import { PanierServiceService } from 'src/app/Services/panier-service.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { ServigeGeneralService } from 'src/app/servige-general.service';
import { BottomBarPage } from '../bottom-bar/bottom-bar.page';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  lesPoulets: any;
  lesOutils: any;
  lesAliments: any;

  aliments = 1
  outils = 3
  poulet = 2

  isModalOpen = false;
  user: any;
  addPanier: any;
  panierProd: any;
  panierTotal = 0;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  panier:Panier = {
    idpanier: undefined,
    quantite: undefined,
    totalproduit: undefined,
    User: undefined,
    Produit: undefined
  }


  poulets: string = "Poulet"; // default button
  unProd: any;
  constructor(private alertController: AlertController,private serviceAccueil: AccueilServiceService,private tokenStorage: TokenStorageService,private loadingCtrl:LoadingController,private route:Router,private panierService:PanierServiceService,private bo:BottomBarPage,private serveGe:ServigeGeneralService) { }

  ngOnInit() {
    //  ICI ON RECUPERER L'UTILISATEUR CONNECTE
    this.user = this.tokenStorage.getUser();
    // ===========================  ICI ON RECUPERE LES POULETS ============================
    this.serviceAccueil.lesProduitsParCategories(this.poulet).subscribe(data => {
      this.lesPoulets = data
    });

    // ===========================  ICI ON RECUPERE LES OUTILS ============================
    this.serviceAccueil.lesProduitsParCategories(this.outils).subscribe(data => {
      this.lesOutils = data
    });

    // ===========================  ICI ON RECUPERE LES ALIMENT ============================
    this.serviceAccueil.lesProduitsParCategories(this.aliments).subscribe(data => {
      this.lesAliments = data
    });
  }

  // LISTER LES PRODUIT PAR LEURS ID
  unProduit(idproduit: any) {
    this.serviceAccueil.lesProduitsParID(idproduit).subscribe(data => {
      this.unProd = data
    })
  }

  // ==================================== AJOUT D'UN PRODUIT AU PANIER ==========================

  ajouterPaner(idproduit:number){
    if(this.user.id == null){
      this.presentAlert()
    }
    else{
    this.serviceAccueil.ajouterAuPanier(this.panier,idproduit,this.user.id).subscribe(data=>{
      this.addPanier = data
      this.loadAddToCard();
      if(this.addPanier.status == true){
        this.showLoading()
      }
     
    })}
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'En cours...',
      duration: 1000,
      spinner: 'circles',
    });

    loading.present();
  }
  loadData() { this.user = this.tokenStorage.getUser();
    this.panierService.lesProduitsParFermes(this.user.id,true).subscribe(data=>{
      this.panierProd = data;
      for(let a of this.panierProd)
        this.panierTotal += a.quantite 
        // this.MontantTotal += a.totalproduit
    }) // this.route.navigateByUrl('/bottom-bar/produit')
    
   }




   loadAddToCard(){
    this.panierService.totalQuantite(this.user.id).subscribe(data=>{
      this.panierProd = data;
      this.serveGe.showValue.next(this.panierProd[0]); // CETTE METHODE PERMET DE FAIRE APPEL A NOTRE OBSERVABLE ICI   
    })
   }


     //  CETTE METHODE EST APPELLEE UNE FOIS QUE L'UTILISATEURS ESSAI D'AJOUTER UN PRODUITS AU PANIER ET QU'IL N'EST PAS CONNECTE
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Connexion requise !',
      // subHeader: 'Veuillez vous connecté pour pouvoir ajouter un produit au panier',
      message: 'Veuillez vous connecté pour pouvoir ajouter un produit au panier !',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
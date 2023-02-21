import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonInput, LoadingController, ModalController } from '@ionic/angular';
import { Panier } from '../Models/panier';
import { AccueilServiceService } from '../Services/accueil-service.service';
import { PanierServiceService } from '../Services/panier-service.service';
import { TokenStorageService } from '../Services/token-storage.service';
import { ServigeGeneralService } from '../servige-general.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
  entryComponents: [PanierComponent]
})
export class PanierComponent implements OnInit {
  form: any = {
  Quantity:"",
  nomm:""
  };
  panier:Panier ={
    idpanier: undefined,
    quantite: undefined,
    totalproduit: undefined,
    User: undefined,
    Produit: undefined
  }


  panierProd: any;
  user: any;
  inc = 0;
  value = 0;
  MontantTotal=0
  valeur=0;
  newValue = 0;
  addPanier: any;

  constructor(
    private loadingCtrl:LoadingController,
    private serveGe:ServigeGeneralService,
    private modalCtrl: ModalController, 
    private panierService:PanierServiceService, 
    private tokenStorage:TokenStorageService,
    private serviceAccueil:AccueilServiceService) { }

  ngOnInit() {
    this.user = this.tokenStorage.getUser();
    this.loadDataToPanier();


  }
  loadDataToPanier(){
    const etat = true
    this.panierService.lesProduitsParFermes(this.user.id,etat).subscribe(data=>{
      this.panierProd = data;
      for(let a of this.panierProd){
        this.inc += a.quantite 
        this.valeur = a.quantite
        this.MontantTotal += a.totalproduit
      }
    })
  }
// ==================================================  METTRE A JOURS LE PANIER
  mettreAjours(form: NgForm,idproduit:any){
    this.panier.quantite = form.value.myNumber;

    this.serviceAccueil.ajouterAuPanierS(this.panier,idproduit,this.user.id).subscribe(data=>{
      this.addPanier = data
      this.loadAddToCard();
      if(this.addPanier.status == true){
       this.showLoading()
       this.loadDataToPanier();
       this.recharger()
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

  // ================================== LA FONCTION POUR SUPPRIMER UN PRODUIT DU PANIER

  supprimer(idpanier:any,idproduit:any){
    this.panierService.supprimerProduit(idpanier,idproduit,this.user.id).subscribe(data=>{
      this.recharger();
      this.loadAddToCard()
    })
  }

  loadAddToCard(){
    this.panierService.totalQuantite(this.user.id).subscribe(data=>{
      this.panierProd = data;
      this.serveGe.showValue.next(this.panierProd[0]); // CETTE METHODE PERMET DE FAIRE APPEL A NOTRE OBSERVABLE ICI   
    })
   }


 
  // =============================== LA FONCTION POUR FERMER LE MODAL

  closeModal() {
    this.modalCtrl.dismiss();
  }

  // =============================== RELODER OU RECHARGER LE CONTENU DE LA PAGE ========================
  recharger(){
    const etat = true
    this.panierService.lesProduitsParFermes(this.user.id,etat).subscribe(data=>{
      this.panierProd = data;


      for(let a of this.panierProd){
        this.inc += a.quantite 
        this.valeur = a.quantite
        this.MontantTotal = a.totalproduit
      }
    })
  }

}

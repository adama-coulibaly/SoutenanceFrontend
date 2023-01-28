import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Panier } from 'src/app/Models/panier';
import { AccueilServiceService } from 'src/app/Services/accueil-service.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  lesPoulets: any;
  lesOutils: any;
  lesAliments: any;

  aliments = 3
  outils = 2
  poulet = 1

  isModalOpen = false;
  user: any;
  addPanier: any;
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


  poulets: string = "poulet"; // default button
  unProd: any;
  constructor(private serviceAccueil: AccueilServiceService,private tokenStorage: TokenStorageService,private loadingCtrl:LoadingController,private route:Router) { }

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
    alert("je suist "+this.panier+" "+idproduit+" "+this.user.id)
    this.serviceAccueil.ajouterAuPanier(this.panier,idproduit,this.user.id).subscribe(data=>{
      this.addPanier = data
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
    this.loadData();
  }
  loadData() {
    // this.route.navigateByUrl('/bottom-bar/produit')
    
   }

}
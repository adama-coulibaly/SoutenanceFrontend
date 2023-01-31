import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  panierProd: any;
  user: any;
  inc = 0;
  value = 0;
  MontantTotal=0
  valeur=0;

  constructor(private serveGe:ServigeGeneralService,private modalCtrl: ModalController, private panierService:PanierServiceService, private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    this.user = this.tokenStorage.getUser();
    this.panierService.lesProduitsParFermes(this.user.id).subscribe(data=>{
      this.panierProd = data;
      for(let a of this.panierProd){
        this.inc += a.quantite 
        this.valeur = a.quantite
        this.MontantTotal += a.totalproduit
      }
    })

  }  
   increment() {
    this.panierService.lesProduitsParFermes(this.user.id).subscribe(data=>{
      this.panierProd = data;


      for(let a of this.panierProd){
        this.valeur = a.quantite;
      }
    })
  
  }

  decrement() {
    // valeur--;
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
    this.panierService.lesProduitsParFermes(this.user.id).subscribe(data=>{
      this.panierProd = data;


      for(let a of this.panierProd){
        this.inc += a.quantite 
        this.valeur = a.quantite
        this.MontantTotal += a.totalproduit
      }
    })
  }

}

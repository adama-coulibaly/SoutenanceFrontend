import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PanierServiceService } from '../Services/panier-service.service';
import { TokenStorageService } from '../Services/token-storage.service';

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

  constructor(private modalCtrl: ModalController, private panierService:PanierServiceService, private tokenStorage:TokenStorageService) { }

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

  // ================================== LE COMPTEUR 


 
  // =============================== LA FONCTION POUR FERMER LE MODAL

  closeModal() {
    this.modalCtrl.dismiss();
  }

}

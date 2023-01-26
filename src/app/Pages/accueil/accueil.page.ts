import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PanierComponent } from 'src/app/panier/panier.component';
import { AccueilServiceService } from 'src/app/Services/accueil-service.service';
import { ThemeServiceService } from 'src/app/Services/theme-service.service';

import { AnimationController } from '@ionic/angular';
import { FormationServiceService } from 'src/app/Services/formation-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  lesproduits: any;
  lesFormation: any;
  uneformation: any;
  iab: any;
  isModalOpen = false;
  unProd: any;
  lesF: any;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
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

  constructor(private serviceAccueil:AccueilServiceService, private modalCtrl: ModalController,private animationCtrl: AnimationController,private serviceFormation:FormationServiceService) { }
  lesThemes:any;

  ngOnInit() {
// ===================================================== RECUPERATION DES PRODUITS
     this.serviceAccueil.lesProduits().subscribe(data=>{
      this.lesproduits = data
     });

// ===================================================== RECUPERATION DES FORMATIONS

this.serviceFormation.mesFormations().subscribe(data=>{
  this.lesFormation = data;
 
});
    
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

  


}

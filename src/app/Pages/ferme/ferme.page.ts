import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { AlertController, AnimationController, NavController } from '@ionic/angular';
import { Produits } from 'src/app/Models/Produits';
import { FermeService } from 'src/app/Services/ferme.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ferme',
  templateUrl: './ferme.page.html',
  styleUrls: ['./ferme.page.scss'],
})
export class FermePage implements OnInit  {
  info: any;
  production: any;

  pages = 'productions'
  produits: any;
  monProduit: any;
  root!:any
  bien: any;
  bien1: any;
  etat: any;

  product:Produits={
    idproduit: undefined,
    nomproduit: undefined,
    reference: undefined,
    descriptionproduit: undefined,
    phtoproduit: undefined,
    prix: undefined,
    quantiteVente: undefined,
    etat: undefined
  }


  constructor(private route:ActivatedRoute,private fermeService: FermeService,private animationCtrl: AnimationController,public navCtrl: NavController) { }


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  isModalOpen = false;

  ngOnInit() {

    // RECUPERATION DES INFORMATION D'UNE FERME
    const idferme = +this.route.snapshot.params["idferme"];
    this.fermeService.infoFermes(idferme).subscribe(data=>{
      this.info = data;
    });

    // RECUPERATION DES PRODUCTIONS D'UNE FERME
    this.fermeService.lesProductions(idferme).subscribe(data=>{
      this.production = data;
    });

    // RECUPERATION DES PRODUITS PAR FERMES
    this.fermeService.lesProduitsParFermes(idferme).subscribe(data=>{
      this.produits = data;
 
    });

    // RECUPERER LES PRODUITS PAR LEURS ID
    
    console.log('je suis le ID '+idferme)
  }
  
  // ========================== ICI ON RECUPERE LES PRODUITS PAR ID

  produit(idproduits:any){
    this.fermeService.lesProduitsParId(idproduits).subscribe(data=>{
      this.monProduit = data;
      if(this.monProduit.etat == true){
          this.bien = this.monProduit
      }

    })
  };

// ============================= ICI ON SUPRIME UN PRODUITS
supprimerProd(idproduit:any){
 
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    heightAuto: false,
    text: 'Etes-vous sûre de vouloir supprimer ?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non<style>margin-right: 15px;</style>',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this.product.etat = false
      this.fermeService.supprimerProduit(this.product,idproduit).subscribe(data=>{
        this.navCtrl.navigateRoot(['/ferme']);
        //window.location.reload();
      })
      swalWithBootstrapButtons.fire({
        heightAuto: false,
        title: 'Supprimer !',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'OK',
        reverseButtons: true
      })
    }
  })


}



  

}

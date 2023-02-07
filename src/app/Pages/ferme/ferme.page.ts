import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { AlertController, AnimationController, NavController } from '@ionic/angular';
import { Ferme } from 'src/app/Models/Ferme';
import { Production } from 'src/app/Models/Production';
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
  isSuccessful = false;
  nonValide: any;


  pages = 'productions'
  produits: any;
  monProduit: any;
  root!:any
  bien: any;
  bien1: any;
  etat: any;

  form:any={
    dateentrer: '',
    datesortie: '',
    quantite: '',
    idtype:''
  }

  form2:any = {
      status:''
  }



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

  maFerme:any

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

productions:Production = {
  idproduction: undefined,
  dateentrer: undefined,
  datesortie: undefined,
  quantite: undefined,
  etat: undefined,
  ferme: undefined,
  Typeproduction: undefined,
  Status: undefined
}

  taille: any;
  produitTotal: any;
  etatsProds: boolean = false;
  monEtat: boolean = false;
  idferme: any;
  mesTypes: any;
  erreursProduction: any;
  mesStatus: any;
  mesFIltres: any;


  constructor(private redirection:Router, private route:ActivatedRoute,private fermeService: FermeService,private animationCtrl: AnimationController,public navCtrl: NavController) { }


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;

  }
  setOpen2(isOpen2: boolean) {
    this.isModalOpen2 = isOpen2;
  }
  isModalOpen = false;
  isModalOpen2 = false;



  ngOnInit() {

    this.reloadProduction();
    this.lesEnumerations();

    // LES TYPES DE PRODUCTIONS ICI
    this.fermeService.lesTypesdeProduction().subscribe(data=>{
      this.mesTypes = data
    })

    // RECUPERATION DES INFORMATION D'UNE FERME
    this.idferme = +this.route.snapshot.params["idferme"];
    this.fermeService.infoFermes(this.idferme).subscribe(data=>{
      this.info = data;
    });


    // RECUPERATION DES PRODUITS PAR FERMES ET ETATS
    this.monEtat = true
    this.fermeService.lesProduitsParFermesEtat(this.idferme,this.monEtat).subscribe(data=>{
      this.produits = data;
      for(let etatsProd of this.produits)
      if(etatsProd.etat == true)
          this.etatsProds = etatsProd.etat
  
      this.produitTotal = this.produits.length
    });

    // RECUPERER LES PRODUITS PAR LEURS ID
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

// ========================================================== ICI ON SUPRIME UN PRODUITS ==========================================================
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
    cancelButtonText: 'Non',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this.product.etat = false
      this.fermeService.supprimerProduit(this.product,idproduit).subscribe(data=>{
        this.navCtrl.navigateRoot(['/ferme']);
        this.reloadPage()
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
    this.reloadPage();
  })

}


// ============================= ICI ON SUPRIME UNE FERME ==============================================================
supprimerFerme(idferme:any){

  Swal.fire({
    heightAuto: false,
    title: 'Etes-vous sûr(e)',
    text: "Cette ferme contient des informations utiles, en le supprimant vous pouvez là recupérée dans un délai de 7 jours",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#04CF72',
    cancelButtonText: 'Annuler',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Supprimer'
  }).then((result) => {
    if (result.isConfirmed) {

      this.ferme.etat = false
      this.fermeService.supprimerFerme(this.ferme,idferme).subscribe(data=>{
        // this.redirection.navigateByUrl('bottom-bar/profil');
      })
      // this.redirection.navigateByUrl('bottom-bar/profil');
      Swal.fire({
              heightAuto: false,
              title: 'Supprimer avec succes!',
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#04CF72',
              confirmButtonText: 'OK',
              reverseButtons: true
            })
            window.location.reload()
    }
  })

}

// ===============================================   INSERTION DES PRODUCTIONS
onSubmit(){
this.productions.dateentrer = this.form.dateentrer
this.productions.datesortie = this.form.datesortie
this.productions.quantite = this.form.quantite

this.fermeService.ajouterProduction(this.productions,this.form.idtype,this.idferme).subscribe(data=>{
  if(data.status == true){
    Swal.fire({
      heightAuto: false,
      icon: 'success',
      text: 'Production ajoutée avec succes !',
      showConfirmButton: false,
      timer: 2500
    })
    this.viderChamps();
    this.isModalOpen2 = false;
    this.reloadProduction();
  }
  else{
    this.erreursProduction = data.message
  }
})

}

reloadPage(){
  // RECUPERATION DES INFORMATION D'UNE FERME
  const idferme = +this.route.snapshot.params["idferme"];
  this.monEtat = true
    this.fermeService.lesProduitsParFermesEtat(idferme,this.monEtat).subscribe(data=>{
    this.produits = data;});
}

reloadProduction(){
  
    // RECUPERATION DES PRODUCTIONS D'UNE FERME
    const idferme = +this.route.snapshot.params["idferme"];
    this.fermeService.lesProductions(idferme).subscribe(data=>{
      this.mesFIltres = data;
      this.taille = this.production.length
    });

   
}

 viderChamps(){
      this.form.dateentrer = ""
      this.form.datesortie = ""
      this.form.quantite = ""
      this.form.idtype = " "
    }
// =========================================================================== ENUM 
  lesEnumerations(){
    this.fermeService.enumStatus().subscribe(data=>{
      this.mesStatus = data
    })
  }
//============================================================================ 

faireUnFiltre(){

if(this.form2.status == "tous"){

  this.reloadProduction();

}
else{

  this.fermeService.fitrerProduction(this.form2.status,this.idferme).subscribe(data=>{
    this.mesFIltres = data
  })
}

}


}

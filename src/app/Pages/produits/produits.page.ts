import { Component, OnInit } from '@angular/core';
import { AccueilServiceService } from 'src/app/Services/accueil-service.service';

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
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  poulets: string = "poulet"; // default button
  unProd: any;
  constructor(private serviceAccueil: AccueilServiceService,) { }

  ngOnInit() {
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

}
import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/Models/Commande';
import { PanierServiceService } from 'src/app/Services/panier-service.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { ServigeGeneralService } from 'src/app/servige-general.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-valider-commende',
  templateUrl: './valider-commende.page.html',
  styleUrls: ['./valider-commende.page.scss'],
})
export class ValiderCommendePage implements OnInit {

  isVisible = false;
  myVal: any;
  livraison() {
    this.isVisible = false
  }
  orangeMoney() {
    this.isVisible = true
  }

  commande: Commande = {
    idcommande: undefined,
    LocalDate: undefined,
    codecommande: undefined,
    quantitecommande: undefined,
    montanttotal: undefined,
    status: undefined,
    Panier: undefined,
    User: undefined
  }


  user: any;
  panierProd: any;
  inc = 0;
  MontantTotal = 0;

  constructor(private panierService: PanierServiceService, private tokenStorage: TokenStorageService,public serveGe:ServigeGeneralService) { }

  ngOnInit() {

    this.serveGe.showValue$.subscribe(value => {
      this.myVal = value
    });

    // ====================================== ON RECUPERE L'UTILISATEURS
    this.user = this.tokenStorage.getUser();
    const etat = true
    this.panierService.lesProduitsParFermes(this.user.id,etat).subscribe(data => {
      this.panierProd = data;
      for (let a of this.panierProd) {
        this.inc += a.quantite
        // this.valeur = a.quantite
        this.MontantTotal += a.totalproduit
      }
      this.serveGe.showValue.next(this.inc);
    })

    // ================================================================= GESTION DE MODAL DE PAYEMENT
  }


  Confirmer() {
    Swal.fire({
      heightAuto: false,
      icon: 'success',
      text: 'Payement effectué avec succcès ! \n Montant: ' + this.MontantTotal,
      showConfirmButton: false,
      timer: 2500
    })
    this.livraison();
  }

  valider() {
    this.panierService.Commande(this.commande, this.user.id).subscribe(data => {
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        text: 'Votre commande à été envoyée !',
        showConfirmButton: false,
        timer: 3500
      })
    })
  }
}

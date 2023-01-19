import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { FermeService } from 'src/app/Services/ferme.service';

@Component({
  selector: 'app-ferme',
  templateUrl: './ferme.page.html',
  styleUrls: ['./ferme.page.scss'],
})
export class FermePage implements OnInit {
  info: any;
  production: any;

  pages = 'productions'
  produits: any;




  constructor(private route:ActivatedRoute,private fermeService: FermeService) { }

  ngOnInit() {
// POUR FIXER L'ELEMENT

var nav = document.querySelector('nav'); // cette variable nav est Binder avec la balise nav de de menu
window.addEventListener('scroll', function(){
  // Si la page supérieur à 100 on active le backgrond Noir
  if(window.pageYOffset > 100){ 
    nav!.classList.add('bg-danger');
  }
  else{
    nav!.classList.remove('bg-danger')
  }
});








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
    })
    console.log('je suis le ID '+idferme)
  }
  
  // ========================== ICI ON RECUPERE LES PRODUITS PAR ID

  produit(idproduits:any){
// alert("Je suis le produit "+idproduits)

  }

}

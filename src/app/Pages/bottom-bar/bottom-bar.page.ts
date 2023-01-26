import { Component, OnInit } from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';
import { PanierComponent } from 'src/app/panier/panier.component';
import { PanierServiceService } from 'src/app/Services/panier-service.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';


@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.page.html',
  styleUrls: ['./bottom-bar.page.scss'],
})
export class BottomBarPage implements OnInit {
  user: any;
  panierProd: any;
  panierTotal =  0;
  MontantTotal: any;

  constructor(private modalCtrl: ModalController,private animationCtrl: AnimationController,private tokenStorage:TokenStorageService,private panierService:PanierServiceService) { }

  ngOnInit() {

    this.user = this.tokenStorage.getUser();
    this.panierService.lesProduitsParFermes(this.user.id).subscribe(data=>{
      this.panierProd = data;


      for(let a of this.panierProd)
        this.panierTotal += a.quantite 
        // this.MontantTotal += a.totalproduit
    
    })
  }



  
  async openModal() {
    const myEnterAnimation = await this.animationCtrl.create('myEnter')
      .duration(400)
    .fromTo('transform', 'translateX(100%)', 'translateX(0)');
    
    const modal = await this.modalCtrl.create({
      component: PanierComponent,
      // enterAnimation: myEnterAnimation
    });
    modal.present();
  }
}

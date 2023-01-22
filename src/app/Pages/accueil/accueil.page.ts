import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PanierComponent } from 'src/app/panier/panier.component';
import { AccueilServiceService } from 'src/app/Services/accueil-service.service';
import { ThemeServiceService } from 'src/app/Services/theme-service.service';

import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  lesproduits: any;

  constructor(private serviceAccueil:AccueilServiceService, private modalCtrl: ModalController,private animationCtrl: AnimationController) { }
  lesThemes:any;

  ngOnInit() {

     this.serviceAccueil.lesProduits().subscribe(data=>{
      this.lesproduits = data
     })
    
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

  // ================================== MODAL PANIERE

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

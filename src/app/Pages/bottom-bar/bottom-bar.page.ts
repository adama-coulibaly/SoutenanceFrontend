import { Component, OnInit } from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';
import { PanierComponent } from 'src/app/panier/panier.component';


@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.page.html',
  styleUrls: ['./bottom-bar.page.scss'],
})
export class BottomBarPage implements OnInit {

  constructor(private modalCtrl: ModalController,private animationCtrl: AnimationController) { }

  ngOnInit() {
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

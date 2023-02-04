import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, ModalController, PopoverController } from '@ionic/angular';
import { PanierComponent } from 'src/app/panier/panier.component';
import { PanierServiceService } from 'src/app/Services/panier-service.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { ServigeGeneralService } from 'src/app/servige-general.service';
import { CompteUserComponent } from '../compte-user/compte-user.component';


@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.page.html',
  styleUrls: ['./bottom-bar.page.scss'],
})
export class BottomBarPage implements OnInit {
  user: any;
  panierProd: any;
  // public panierTotal =  0;
  public panierTotal =  0;
  myVal:any
  images:any
  monStatus:any

  

  MontantTotal: any;

  constructor(private modalCtrl: ModalController,private animationCtrl: AnimationController,private tokenStorage:TokenStorageService,private panierService:PanierServiceService,public popoverCtrl: PopoverController,private route:Router,public serveGe:ServigeGeneralService) { }

  ngOnInit() {

    
    this.serveGe.showValue$.subscribe(value => {
      this.myVal = value
    });

    this.serveGe.showImage$.subscribe(value => {
      this.images = value
    });

    this.user = this.tokenStorage.getUser();
   if(this.user.id != null ){
    console.log(this.user.statusUser.idstatus)
    this.monStatus = this.user.statusUser.idstatus
   }


    this.serveGe.showImage.next(this.user.avatar); // ICI ON DONNE LE PROFIL DE L'UTILISATEUR

    // ON LISTE LE CONTENU DES PANIERS D'UN UTILISATEUR
    this.panierService.lesProduitsParFermes(this.user.id,true).subscribe(data=>{
      this.panierProd = data;
      for(let a of this.panierProd)
        this.panierTotal += a.quantite 
      this.serveGe.showValue.next(this.panierTotal);
    
    })
  }
  // =======================================================Popopup de profile 
  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: CompteUserComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


  customPopoverOptions = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color',
  };
  
redirection(){
  this.route.navigateByUrl("/connexion")
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

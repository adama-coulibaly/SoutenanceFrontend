import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, ModalController, PopoverController } from '@ionic/angular';
import { PanierComponent } from 'src/app/panier/panier.component';
import { PanierServiceService } from 'src/app/Services/panier-service.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { ServigeGeneralService } from 'src/app/servige-general.service';
import { CompteUserComponent } from '../compte-user/compte-user.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { NotificationComponent } from '../notification/notification.component';
import { UserService } from 'src/app/Services/user-service.service';



@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.page.html',
  styleUrls: ['./bottom-bar.page.scss'],
})

export class BottomBarPage implements OnInit {
  [x: string]: any;
  user: any;
  panierProd: any;
  // public panierTotal =  0;
  public panierTotal =  0;
  myVal:any
  images:any
  monStatus:any
  notif:any
  taille = 0;

  MontantTotal: any;

  constructor(private userService:UserService,private http:HttpClient, private modalCtrl: ModalController,private animationCtrl: AnimationController,private tokenStorage:TokenStorageService,private panierService:PanierServiceService,public popoverCtrl: PopoverController,private route:Router,public serveGe:ServigeGeneralService) { }

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
    this.notificationUser()
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


    // =======================================================Popopup de profile 
    // async presentPopoverNotification(ev: any) {
    //   const popover = await this.popoverCtrl.create({
    //     component: NotificationComponent,
    //     event: ev,
    //     cssClass: 'custom-popover',
    //     mode: 'ios',
    //     backdropDismiss: true,
    //     animated: true,
    //     keyboardClose: true,
    //     showBackdrop: true,
    //     height: '200px',
    //     width: '300px'
    //   });
    //   return await popover.present();
    // }




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



  async modalNotification() {
    const myEnterAnimation = await this.animationCtrl.create('myEnter')
      .duration(400)
    .fromTo('transform', 'translateX(100%)', 'translateX(0)');
    
    const modal = await this.modalCtrl.create({
      component: NotificationComponent,
      // enterAnimation: myEnterAnimation
    });
    modal.present();
  }
  // =======================================================

  notificationUser(){
    this.userService.getUnUserNotification(this.user.id,false).subscribe(data=>{
      this.notif = data
      this.taille  = this.notif.length
    })
  }

}

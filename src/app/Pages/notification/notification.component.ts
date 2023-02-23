import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationSender } from 'src/app/Models/notificationSender';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { UserService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  user: any;
  notif: any;
  pages:string = "nonlue"

  notificationSender:NotificationSender={
    idnotif: undefined,
    datedenvoi: undefined,
    titrenotification: undefined,
    messagenotification: undefined,
    lire: undefined,
    user: undefined
  }
  notifLu: any;

  constructor(private modalCtrl:ModalController,private tokenStorage:TokenStorageService,private userService:UserService) { }
  closeModal() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.user = this.tokenStorage.getUser()
    if(this.user.id != null){
      this.notificationUser();
      this.notificationUserLu(true);
      
    }
  }
// ::::::::::::::::::::::::::::::::::::::::::: LECTURE DES NOTIFICATIONS
  notificationUser(){
    this.userService.getUnUserNotification(this.user.id,false).subscribe(data=>{
      this.notif = data
    })
  }

  // ::::::::::::::::::::::::::::::::::::::::::: LECTURE DES NOTIFICATIONS
  notificationUserLu(lire:any){
    this.userService.getUnUserNotification(this.user.id,lire).subscribe(data=>{
      this.notifLu = data
    })
  }
// :::::::::::::::::::::::::::::::::::::::::::::: LIRE UNE NOTIFICATION
lireNotig(idnotif:any){
  this.notificationSender.lire = true
  this.userService.lireNotification(this.notificationSender,idnotif).subscribe(data=>{
    this.notificationUser()
  })
}
}

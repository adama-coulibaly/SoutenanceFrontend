import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Commentaires } from 'src/app/Models/Commentaire';
import { DetailForumServicesService } from 'src/app/Services/detail-forum-services.service';
import { ThemeServiceService } from 'src/app/Services/theme-service.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-detail-forum',
  templateUrl: './detail-forum.page.html',
  styleUrls: ['./detail-forum.page.scss'],
})
export class DetailForumPage implements OnInit {

  isModalOpen = false;
  erreurRetour: any;
  com: any;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  Adama = [
    "adms", "mous","ali","jeans","bore"
  ];
  user: any;
  id_theme: any;
  constructor(private alertController: AlertController,private route:ActivatedRoute,private forum:ThemeServiceService, private detailThemeService:DetailForumServicesService,private tokenStorage:TokenStorageService ) { }
  
  commentaire:Commentaires = {
    idcommentaire: undefined,
    descriptioncom: undefined,
    Date: undefined,
    Theme: undefined,
    User: undefined
  }


  lesCommentaires:any
  titre:any
  ngOnInit() {
    // ===================================================================================
    this.user = this.tokenStorage.getUser();
    this.listerLesTheme()
  }
  retour(){
    window.history.back()
  }

  commenter(){
    if(this.user.id == null){
      this.presentAlert()
    }
    else{
        this.forum.commenterTheme(this.commentaire,this.id_theme,this.user.id).subscribe(data=>{
          this.com = data
          if(this.com.status == true){
          this.listerLesTheme()
         this.isModalOpen = false;
         this.commentaire.descriptioncom = " "
          }
          else{
            this.isModalOpen = true;
            this.erreurRetour = this.com.message

          }
         
        })
      }
    
     

  }
  listerLesTheme(){
     // ===================================================================================
     this.id_theme = +this.route.snapshot.params["id_theme"];
     this.detailThemeService.RegionsCommentaire(this.id_theme).subscribe(data=>{
         this.lesCommentaires = data
         for(let comm of this.lesCommentaires)
           this.titre =  comm.theme.titretheme
         
           console.log("=============== "+this.titre)
     })
  }

    //  CETTE METHODE EST APPELLEE UNE FOIS QUE L'UTILISATEURS ESSAI D'AJOUTER UN PRODUITS AU PANIER ET QU'IL N'EST PAS CONNECTE
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Connexion requise !',
        // subHeader: 'Veuillez vous connecté pour pouvoir ajouter un produit au panier',
        message: 'Veuillez vous connecté pour pouvoir ajouter un commentaire !',
        buttons: ['OK'],
      });
  
      await alert.present();
    }

    back(): void {
      window.history.back()
    }


}

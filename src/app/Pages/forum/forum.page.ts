import { Component, OnInit } from '@angular/core';
import { DatePipe, Location } from "@angular/common";
import { ThemeServiceService } from 'src/app/Services/theme-service.service';
import { Theme } from 'src/app/Models/Teheme';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  poster: any;

tailleMinimum:any
  erreur: string | undefined;
  user: any;

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} nombre de caractères requis`;
  }


  myBackButton(){
    this.location.back();
  }
 Adama = [
    "adms", "mous","ali","jeans","bore"
  ];

  maDate:any

 filterTerm!: string;

  constructor(private alertController: AlertController,private location: Location, private ThemesService:ThemeServiceService,private tokenStorage:TokenStorageService) {

    // this.maDate = this.datePipe.transform(this.maDate, 'dd/MM/yyyy');
   }
    lesThemes:any;
 
   theme:Theme = {
    idtheme :'',
    titretheme:'',
    dateposte:'',
    user_id:''
   }
 

  ngOnInit() {
    // ON RECUPERE L'UTILISATEUR CONNECTE
    this.user = this.tokenStorage.getUser();
    // ON LISTE TOUS LES TERMES
      this.ThemesService.toutLesThemes().subscribe(data=>{
        this.lesThemes = data;
      });
    
  }
  // La methode pour pouvoir ajouter une Thème
  ajouter(){


    if(this.user.id == null){
      this.presentAlert()
    }
    else{


    this.theme.titretheme
    if(this.theme.titretheme.length < 25){
      this.erreur = "Taille minimum 25 caractères !"
      this.tailleMinimum = false
    }
    else{
      this.tailleMinimum = true
      this.ThemesService.posterTheme(this.theme,this.user.id).subscribe(data=>{
      this.poster = data
    })
    window.location.reload()

    }

   
    
  }
}
    
  //  CETTE METHODE EST APPELLEE UNE FOIS QUE L'UTILISATEURS ESSAI D'AJOUTER UN PRODUITS AU PANIER ET QU'IL N'EST PAS CONNECTE
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Connexion requise !',
      // subHeader: 'Veuillez vous connecté pour pouvoir ajouter un produit au panier',
      message: 'Veuillez vous connecté pour pouvoir poster un thème !',
      buttons: ['OK'],
    });

    await alert.present();
  }

}

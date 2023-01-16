import { Component, OnInit } from '@angular/core';
import { DatePipe, Location } from "@angular/common";
import { ThemeServiceService } from 'src/app/Services/theme-service.service';
import { Theme } from 'src/app/Models/Teheme';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  poster: any;

tailleMinimum:any
  erreur: string | undefined;

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

  constructor(private location: Location, private ThemesService:ThemeServiceService) {

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
      this.ThemesService.toutLesThemes().subscribe(data=>{
        this.lesThemes = data;
        // console.log("Voici mes theme: "+this.lesThemes.dateposte)
      });
    
  }
  // La methode pour pouvoir ajouter une Thème
  ajouter(){
    this.theme.titretheme
    if(this.theme.titretheme.length < 25){
      this.erreur = "Taille minimum 25 caractères !"
      this.tailleMinimum = false
    }
    else{
      this.tailleMinimum = true
      this.ThemesService.posterTheme(this.theme,1).subscribe(data=>{
      this.poster = data
    })
    window.location.reload()

    }
    
  }
    

  
 

}

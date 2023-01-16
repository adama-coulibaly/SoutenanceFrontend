import { Component, OnInit } from '@angular/core';
import { DatePipe, Location } from "@angular/common";
import { ThemeServiceService } from 'src/app/Services/theme-service.service';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} nombre de caractères requis`;
  } // back(): void {
  //   window.history.back()
  // }

  myBackButton(){
    this.location.back();
  }
 Adama = [
    "adms", "mous","ali","jeans","bore"
  ];

  maDate:any

  constructor(private location: Location, private ThemesService:ThemeServiceService) {

    // this.maDate = this.datePipe.transform(this.maDate, 'dd/MM/yyyy');
   }
 
  lesThemes:any;

  ngOnInit() {
      this.ThemesService.toutLesThemes().subscribe(data=>{
        this.lesThemes = data
        console.log("Voici mes theme: "+this.lesThemes.dateposte)
      })
    
  }
 

}

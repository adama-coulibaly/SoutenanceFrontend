import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/Services/theme-service.service';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private ThemesService:ThemeServiceService) { }
  lesThemes:any;

  ngOnInit() {
      // this.ThemesService.toutLesThemes().subscribe(data=>{
      //   this.lesThemes = data
      //   console.log("Voici mes theme: "+this.lesThemes)
      // })
    
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

}

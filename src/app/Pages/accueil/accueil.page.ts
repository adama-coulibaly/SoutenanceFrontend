import { Component, OnInit } from '@angular/core';
import { AccueilServiceService } from 'src/app/Services/accueil-service.service';
import { ThemeServiceService } from 'src/app/Services/theme-service.service';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  lesproduits: any;

  constructor(private serviceAccueil:AccueilServiceService) { }
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

}

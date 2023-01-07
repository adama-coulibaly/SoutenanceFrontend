import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
    spaceBetween:10,
    autoplay:true
  }

}

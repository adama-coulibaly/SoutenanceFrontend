import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
import donee from "../information.json";
interface Information{
  id:number,
  imagee:String,
  Mois:String,
  description:String
}

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss'],
})




export class InfosComponent implements OnInit {

  temperatureCelsius!: number ;
  location: any;
  temp: any;

  // ajourdhui = new Date;
  ajourdhui:any
  maDate:any
  time: any;
  

  

  constructor(private modalCtrl: ModalController,) { }

  informations:Information[]= donee;

  ngOnInit() {

    setInterval(() => {
      this.ajourdhui  = new Date();
      this.time = this.ajourdhui.toLocaleTimeString()
    }, 1000);
   
    
    this.temperatUreActuelle();
  }


closeModal() {
  this.modalCtrl.dismiss();
}


options={
  slidesPerView:1,   // NOMBRE DE SLIDE PAR PAGE = 1
  centeredSlider:true,
  loop:true,
  autoplay:true
}

  // ====================================================== LA TEMPERATURE ACTUELLE

  temperatUreActuelle(){
    // Obtenir la position de l'utilisateur
navigator.geolocation.getCurrentPosition(position => {
const lat = position.coords.latitude;
const lng = position.coords.longitude;

// Utiliser l'API de météo pour récupérer les informations météorologiques
fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=763e352d9be1cbeff46ab10fc68c5d6b
`)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    this.temperatureCelsius = temperature - 273.15;
    this.location = data.name;
    this.temp = this.temperatureCelsius.toFixed(2);
    console.log(`La température actuelle est de ${this.temperatureCelsius.toFixed(2)}°C.`);
  });
});
}
}

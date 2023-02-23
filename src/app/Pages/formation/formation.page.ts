import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FormationServiceService } from 'src/app/Services/formation-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.page.html',
  styleUrls: ['./formation.page.scss'],
})
export class FormationPage implements OnInit {
  lesFormation: any;
  uneformation: any;
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  options={
    slidesPerView:1,   // NOMBRE DE SLIDE PAR PAGE = 1
    centeredSlider:true,
    loop:true,
    spaceBetween:10,
    autoplay:true
  }

  constructor(private youtube: YoutubeVideoPlayer,private serviceFormation:FormationServiceService,private router:Router,private iab: InAppBrowser) { }

  ngOnInit() {
    // this.youtube.openVideo('https://www.youtube.com/watch?v=VJPNkhdhJzA');

    this.serviceFormation.mesFormations().subscribe(data=>{
      this.lesFormation = data;
    })
  }
//=============================================== ICI ON PREND UNE SEULE FORMATION
uneFormation(idformation:any){
  this.serviceFormation.lesFormationsParId(idformation).subscribe(data=>{
    this.uneformation = data
  })
}
// ============================================== ICI ON REDIRIGE VERS LE LIEN YOURUBE
  visiter(url:any){

    Swal.fire({
      heightAuto: false,
      // title: 'Are you sure?',
      text: "Vous serez rediriger vers Youtube",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#04CF72',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Continuer'
    }).then((result) => {
      if (result.isConfirmed) {
       this.iab.create(url)

      //  this.iab.create('https://www.youtube.com/channel/UCg13jYjmtpVZyZWthQ-g5Dg')
      }
    })
    
  }



  lireVideo(){
    this.youtube.openVideo('https://www.youtube.com/watch?v=VJPNkhdhJzA');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private serviceFormation:FormationServiceService,private router:Router,private iab: InAppBrowser) { }

  ngOnInit() {

    this.serviceFormation.mesFormations().subscribe(data=>{
      this.lesFormation = data;
    })
  }


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

}

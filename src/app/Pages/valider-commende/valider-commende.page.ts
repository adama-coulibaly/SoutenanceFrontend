import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-valider-commende',
  templateUrl: './valider-commende.page.html',
  styleUrls: ['./valider-commende.page.scss'],
})
export class ValiderCommendePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  valider(){
    Swal.fire({
      heightAuto: false,
      icon: 'success',
      text: 'Votre commande à été envoyée !',
      showConfirmButton: false,
      timer: 2500
    })
  }
}

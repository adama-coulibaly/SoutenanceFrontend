import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(private route:Router) { }

Message!:String 

  ngOnInit() {
  }

  connexion(form: any){
    if(form.value.email == "coulibalyadamabekaye03@gmail.com" && form.value.password == "123456"){
         alert("Connexion reussie avec succès")
         this.route.navigateByUrl("/accueil")
    }
    else{
      this.Message = "Donnés incorrectes"
    }
  }

}

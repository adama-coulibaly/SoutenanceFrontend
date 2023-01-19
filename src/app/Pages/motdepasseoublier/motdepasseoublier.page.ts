import { Component, OnInit } from '@angular/core';
import { MotDePasseOublierService } from 'src/app/Services/mot-de-passe-oublier.service';

@Component({
  selector: 'app-motdepasseoublier',
  templateUrl: './motdepasseoublier.page.html',
  styleUrls: ['./motdepasseoublier.page.scss'],
})
export class MotdepasseoublierPage implements OnInit {


  form: any = {
    email: null,
  };

  form2: any = {
    emailOrNumero:null,
    confirmpassword:null,
    newpassword:null,
    currentpassword:null,
  };



  resultat:any

  constructor(private motDEpasse:MotDePasseOublierService) { }

  ngOnInit() {
  }

  isVisible = true;

// ==================================================== ICI POUR RENVOYER LE MAIL 
  onSubmit(): void {
    this.motDEpasse.verierEmail(this.form.email).subscribe(data=>{
     this.resultat = data
     if(this.resultat.status == true){
      this.isVisible = false
     }else{
      this.isVisible = true
     }
    })
  }
// ==================================================== ICI POUR CREER UN NOUVEAU MOT DE PASSE 
onReset() {
  
 // this.nouveau = this.form.emailOrNumero

  this.form2.emailOrNumero = this.form.emailOrNumero;
  this.form2.confirmpassword = this.form.confirmpassword;
  this.form2.newpassword = this.form.newpassword;
  this.form2.currentpassword = this.form.currentpassword;
  alert("Je suis "+this.form);

  this.motDEpasse.nouveauMDP(this.form2).subscribe(data=>{
    this.resultat = data
  })



  }

}

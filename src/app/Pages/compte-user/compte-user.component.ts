import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { UserService } from 'src/app/Services/user-service.service';
import { ServigeGeneralService } from 'src/app/servige-general.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compte-user',
  templateUrl: './compte-user.component.html',
  styleUrls: ['./compte-user.component.scss'],
})
export class CompteUserComponent implements OnInit {

nom:any
prenom:any


  user: any;
  nonValide: any;
  file: any;

  formulaire!: FormGroup

  isSuccessful = false;
  // POUR FERMER LE MODAL 
  isModalOpen = false;

  form:any={
    nom:'',
    prenom:'',
    email:'',
    adresse:'',
    username:'',
    password:''
  }

  

  form2:any={
    nom:'',
    prenom:'',
    email:'',
    adresse:'',
    username:'',
    password:''
  }

  utilisateur: any;
  nomM: any;
  prenomM: any;
  emailM: any;
  adresseM: any;
  tel: any;
  passwordU: any;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  

  constructor(private modalCtrl:ModalController, private tokenStorage:TokenStorageService,private router:Router,private userService:UserService,private serveGe:ServigeGeneralService) { }

  closeModal() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.user = this.tokenStorage.getUser();
   this.loadUsers();
  }
  // ===============================================USERS DONNEES =========================
  loadUsers(){
    this.userService.getUnUser(this.user.id).subscribe(data=>{
      this.utilisateur = data})
  }

  fileChangm(event: any) {
    this.file = event.target.files[0]
    // console.log(this.file)
    this.userService.updateAvatar(this.user.id,this.file).subscribe({
      next:data=>{

        this.user = this.tokenStorage.getUser();
        
        this.serveGe.showImage.next(this.user.avatar); // CETTE METHODE PERMET DE FAIRE APPEL A NOTRE OBSERVABLE ICI   
        this.loadUsers();
    
       },
       error:err=> {
        Swal.fire({
          heightAuto: false,
          text: 'Veuillez choisir une image avec une taille maximum de 10 Mo',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#04CF72',
          confirmButtonText: 'OK',
          reverseButtons: true
        })
       }
    })
    }

    // ===============================================CETTE FONCTION PERMET DE DECONNECTER L'UTILISATEUR
    logout(): void {
      this.tokenStorage.signOut();
          this.router.navigateByUrl('bottom-bar/accueil')
      location.reload();
    }

    // ================================================ MODIFIER LE PROFIL AVATAR

    // updateAvatar(){
    //     this.userService.updateAvatar(this.user.id,this.file).subscribe(data=>{})
    //     alert("Teste")
    // }


    modifier(iduser:any){
      this.userService.getUnUser(iduser).subscribe(data=>{
        this.utilisateur = data

        this.nomM = this.utilisateur.nom
        this.prenomM = this.utilisateur.prenom
        this.emailM = this.utilisateur.email
        this.adresseM = this.utilisateur.adresse
        this.tel = this.utilisateur.username
        this.passwordU = this.utilisateur.password
       
      })
      
    }

    enregistrer(iduser:any){
      this.userService.getUnUser(iduser).subscribe(data=>{
        this.utilisateur = data })
      this.form2.nom = this.form.nom
      this.form2.prenom = this.form.prenom
      this.form2.adresse = this.form.adresse
      this.form2.email = this.form.email
      this.form2.username = this.form.username
      this.form2.password = this.form.password

      if( this.form.nom == ""){
        this.form2.nom = this.utilisateur.nom
        this.setOpen(false)
      }
      else if(this.form.prenom == ""){
        this.form2.prenom = this.utilisateur.prenom
        this.setOpen(false)
      }
      else if(this.form.adresse == ""){
        this.form2.adresse = this.utilisateur.adresse
        this.setOpen(false)
      }
      else if(this.form.email == ""){
        this.form2.email = this.utilisateur.email
        this.setOpen(false)
      }
      else if(this.form.username == null){
        this.form2.username = this.utilisateur.username
        this.setOpen(false)
      }
      else if(this.form.password == ""){
        this.form2.password = this.utilisateur.password
        this.setOpen(false)
      }
      else{
            this.userService.updateUsers(iduser,this.form2).subscribe(data=>{
      if(data.status == true){
          this.setOpen(false)
      }
     })
      }

 
    }

}

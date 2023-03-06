import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import Swal from 'sweetalert2';
import { FermeService } from '../Services/ferme.service';

@Component({
  selector: 'app-detail-production',
  templateUrl: './detail-production.component.html',
  styleUrls: ['./detail-production.component.scss'],
})
export class DetailProductionComponent implements OnInit {
  mesEntretiens: any;
  idRecuperer: any;
  entretien: any;
  messageError: any;
  item: any;
  selectedItems: any;
  filterTerm!: any
  
  filterTerm2!: any
  mesMortalite: any;
  totalMortalite = 0;
  mortalite: any;
  unProd: any;
  nbreEntretien: any;
  
  constructor(private modalCtrl: ModalController, private fermeService: FermeService, private navParams: NavParams,) {
    //ici je recuperere ces données dans envoyer au modal()  
    this.idRecuperer = this.navParams.get('data');
  }
  
  isModalOpen = false;
  isModalOpen2 = false;
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }
  
  form: any = {
    typeentretien: '',
    dateentretien: '',
    heuresentretien: '',
  }
  form1: any = {
    typeentretien: '',
    dateentretien: '',
    heuresentretien: '',
  }
  form3: any = {
    causedeces: '',
    date: '',
    nombredeces: '',
  }
  form4:any = {
    causedeces: '',
    date: '',
    nombredeces: '',
  }
  
  nonValide: any;
  isSuccessful = false;
  isSignUpFailed = false;
  
  
  
  
  pages: String = "entretiens";
  
  ngOnInit() {
    this.getEntretienParProd();
    this.getMortaliteParProd()
    this.getProduction(this.idRecuperer)
    
  }
  
  supprimerEntretien2(identretien:any) {
    Swal.fire({
      heightAuto: false,
      text: "Voulez-vous supprimer cet entretien ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#04CF72',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer'
    }).then((result) => {
      if (result.isConfirmed) {
        this.fermeService.SupprimerEntrertien(identretien).subscribe(data=>{
      if(data.status == true){
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          text: 'Entretien supprimer !',
          showConfirmButton: false,
          timer: 2000,
        })
          this.getEntretienParProd();
        
      }
    })
  
      }})  
    }

    supprimerMortaliter(identretien:any) {
      Swal.fire({
        heightAuto: false,
        text: "Voulez-vous supprimer cette mortalité ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#04CF72',
        cancelButtonText: 'Annuler',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Supprimer'
      }).then((result) => {
        if (result.isConfirmed) {
          this.fermeService.SupprimerMoratlite(identretien).subscribe(data=>{
        if(data.status == true){
          Swal.fire({
            heightAuto: false,
            icon: 'success',
            text: 'Mortalité supprimer !',
            showConfirmButton: false,
            timer: 2000,
          })
            this.getMortaliteParProd();
          
        }
      })
    
        }})  
      }
  closeModal() {
    this.modalCtrl.dismiss();
  }

  // ======================================== Ajouter un nouveau entretien
  onSubmit() {

    const { typeentretien, dateentretien, heuresentretien } = this.form;
    this.form1.typeentretien = this.form.typeentretien
    this.form1.dateentretien = this.form.dateentretien
    this.form1.heuresentretien = this.form.heuresentretien

    this.fermeService.ajouterEntretien(this.form1, this.idRecuperer).subscribe(data => {
      this.entretien = data
      if (this.entretien.status == true) {
        console.log(this.entretien.message)
        this.getEntretienParProd()
        this.isModalOpen = false;

      }
      else {

        Swal.fire({
          heightAuto: false,
          icon: 'warning',
          text: this.entretien.message,
          showConfirmButton: false,
          timer: 3000
        })

      }
    })
  }


    // ======================================== Ajouter un nouveau entretien
    ajouterMortalite() {

      const { causedeces, date, nombredeces } = this.form;
      this.form3.causedeces = this.form4.causedeces
      this.form3.date = this.form4.date
      this.form3.nombredeces = this.form4.nombredeces
  
      this.fermeService.ajouterMortalite(this.form3, this.idRecuperer).subscribe(data => {
        this.mortalite = data
        if (this.mortalite.status == true) {
          console.log(this.mortalite.message)
          this.getMortaliteParProd()
          this.isModalOpen2 = false;
  
        }
        else {
  
          Swal.fire({
            heightAuto: false,
            icon: 'warning',
            text: this.entretien.message,
            showConfirmButton: false,
            timer: 3000
          })
  
        }
      })
    }

  // ====================================== SUPPRESSION ICI DES ENTRETIENS

 

  // ====================================== RECUPERATION DES ENTRETIENS D'UNE PRODUCTION
  getEntretienParProd() {
    this.fermeService.recupererEntretienParProd(this.idRecuperer).subscribe(data => {
      this.mesEntretiens = data
      this.nbreEntretien = this.mesEntretiens.length
    })
  }

  // ====================================== RECUPERATION DES MORTALITES D'UNE PRODUCTION
  getMortaliteParProd() {
    this.fermeService.recupererMortaliteParProd(this.idRecuperer).subscribe(data => {
      this.mesMortalite = data
      this.totalMortalite = this.mesMortalite.length
      // for (let T of this.mesMortalite) {
      //   this.totalMortalite += T.nombredeces
      // }
    })
  }

  // ==================================== RECUPERER UNE SEULE PRODUCTION
  getProduction(idproduction:any){
    this.fermeService.recupererUneSeuleProd(idproduction).subscribe(data=>{
      this.unProd = data
    })
  }

}

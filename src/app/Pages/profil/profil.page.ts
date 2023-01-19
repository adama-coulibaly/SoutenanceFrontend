import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ferme } from 'src/app/Models/Ferme';
import { FermeService } from 'src/app/Services/ferme.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  user: any;
  lesFermes: any;

  ferme:Ferme={
    idferme: undefined,
    omferme: undefined,
    activiteferme: undefined,
    adresseferme: undefined,
    taille: undefined,
    imageferme: undefined,
    etat: undefined,
    User: undefined
  }

  constructor(private tokenStorage: TokenStorageService, private fermeService: FermeService, private router:Router) { }

  ngOnInit() {
    //  ICI ON RECUPERER L'UTILISATEUR CONNECTE
    this.user = this.tokenStorage.getUser();
    // MAINTENANT ON PREND LES FERMES D'UN SEUL UTILISATEUR
    this.fermeService.mesFermes(this.user.id).subscribe(data => {
      this.lesFermes = data;
    });


    
  }

    // ===============================================CETTE FONCTION PERMET DE DECONNECTER L'UTILISATEUR
  logout(): void {
    // console.log("Je suis cliquer")
    this.tokenStorage.signOut();
    this.router.navigateByUrl('connexion')
    // window.location.reload();

  }



  Adama = [1, 2, 3, 4, 5];

  // POUR FERMER LE MODAL 
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}

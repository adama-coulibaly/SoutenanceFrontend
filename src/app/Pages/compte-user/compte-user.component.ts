import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-compte-user',
  templateUrl: './compte-user.component.html',
  styleUrls: ['./compte-user.component.scss'],
})
export class CompteUserComponent implements OnInit {
  user: any;

  constructor(private tokenStorage:TokenStorageService,private router:Router) { }

  ngOnInit() {
    this.user = this.tokenStorage.getUser();
  }


    // ===============================================CETTE FONCTION PERMET DE DECONNECTER L'UTILISATEUR
    logout(): void {
      // console.log("Je suis cliquer")
      this.tokenStorage.signOut();
          this.router.navigateByUrl('bottom-bar/accueil')
      window.location.reload();
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { FermeService } from 'src/app/Services/ferme.service';

@Component({
  selector: 'app-ferme',
  templateUrl: './ferme.page.html',
  styleUrls: ['./ferme.page.scss'],
})
export class FermePage implements OnInit {
  info: any;
  production: any;

  constructor(private route:ActivatedRoute,private fermeService: FermeService) { }

  ngOnInit() {

    // RECUPERATION DES INFORMATION D'UNE FERME
    const idferme = +this.route.snapshot.params["idferme"];
    this.fermeService.infoFermes(idferme).subscribe(data=>{
      this.info = data;
    });

    // RECUPERATION DES PRODUCTIONS D'UNE FERME
    this.fermeService.lesProductions(idferme).subscribe(data=>{
      this.production = data;
    })
    console.log('je suis le ID '+idferme)
  }

}

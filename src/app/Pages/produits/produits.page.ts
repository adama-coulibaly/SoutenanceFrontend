import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }

  Adama = [1,2,3,4,5,6]
   poulets: string = "poulet"; // default button

}

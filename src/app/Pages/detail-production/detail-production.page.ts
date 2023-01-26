import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-production',
  templateUrl: './detail-production.page.html',
  styleUrls: ['./detail-production.page.scss'],
})
export class DetailProductionPage implements OnInit {

  constructor() { }
  Adama = [
    "adms", "mous","ali","jeans","bore",1,5,7,7,
  ];

  pages:String = "entretiens";

  ngOnInit() {
  }

}

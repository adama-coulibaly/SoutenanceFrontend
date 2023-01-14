import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";



@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} nombre de caractères requis`;
  }

  constructor(private location: Location) { }
  Adama = [
    "adms", "mous","ali","jeans","bore"
  ];
  ngOnInit() {
  }
  // back(): void {
  //   window.history.back()
  // }

  myBackButton(){
    this.location.back();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  // templateUrl: '<p>{{message}}</p>',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})



export class MenuComponent implements OnInit {

  message!:String;
  inpuValue!:String;
  constructor() { }

  ngOnInit() {
    this.message = this.inpuValue
  }

}

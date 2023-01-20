import { Component, OnInit } from '@angular/core';

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

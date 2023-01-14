import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-forum',
  templateUrl: './detail-forum.page.html',
  styleUrls: ['./detail-forum.page.scss'],
})
export class DetailForumPage implements OnInit {
  Adama = [
    "adms", "mous","ali","jeans","bore"
  ];
  constructor() { }

  ngOnInit() {
  }

}

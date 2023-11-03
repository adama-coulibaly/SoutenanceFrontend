import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { url } from 'inspector';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.page.html',
  styleUrls: ['./detail-formation.page.scss'],
})
export class DetailFormationPage implements OnInit {

  constructor(private sanitze: DomSanitizer) { }
  videoUrl = "https://www.youtube.com/embed/61bPhdlqfPA";
  mesVideos = [
    {
      "id":1,
      "image":"https://cdn.pratico-pratiques.com/app/uploads/sites/2/2021/10/06114812/poulet-entier-barbecue-a-l-autocuiseur.jpg",
      "titre":"Poulets",
      "url":"https://www.youtube.com/embed/FtPjdlt8Zhs"
    },
    {
      "id":2,
      "image":"https://cdn.pratico-pratiques.com/app/uploads/sites/2/2021/10/06114812/poulet-entier-barbecue-a-l-autocuiseur.jpg",
      "titre":"Poulets",
      "url":"https://www.youtube.com/embed/FtPjdlt8Zhs"
    },
    {
      "id":3,
      "image":"https://cdn.pratico-pratiques.com/app/uploads/sites/2/2021/10/06114812/poulet-entier-barbecue-a-l-autocuiseur.jpg",
      "titre":"Orange",
      "url":"https://www.youtube.com/embed/FtPjdlt8Zhs"
    },
    {
      "id":4,
      "image":"https://cdn.pratico-pratiques.com/app/uploads/sites/2/2021/10/06114812/poulet-entier-barbecue-a-l-autocuiseur.jpg",
      "titre":"Fromage",
      "url":"https://www.youtube.com/embed/FtPjdlt8Zhs"
    }
  ]
  ngOnInit() {
  }
  readVideo(video:any){
  return  this.sanitze.bypassSecurityTrustResourceUrl(video);

  }


  

}

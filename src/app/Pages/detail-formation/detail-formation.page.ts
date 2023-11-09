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
      "titre":"Poulets grillés",
      "url":"https://www.youtube.com/embed/FtPjdlt8Zhs",
      "description":"Les poulets passent la majeure partie de leur temps à gratter l'herbe, à ramasser les grains sur le sol et à prendre de grands bains de sable. "
    },
    {
      "id":2,
      "image":"https://cdn.pratico-pratiques.com/app/uploads/sites/2/2021/10/06114812/poulet-entier-barbecue-a-l-autocuiseur.jpg",
      "titre":"Poulets de chairs",
      "url":"https://www.youtube.com/embed/FtPjdlt8Zhs",
      "description":"Les poulets passent la majeure partie de leur temps à gratter l'herbe, à ramasser les grains sur le sol et à prendre de grands bains de sable. "

    },
    {
      "id":3,
      "image":"https://media.4-paws.org/a/4/c/f/a4cf67ac17ffa3775b15bb893bfa937faafa77ff/VIER%20PFOTEN_2014-04-08_042-1927x1333-1920x1328.jpg",
      "titre":"Orange",
      "url":"https://www.youtube.com/embed/FtPjdlt8Zhs",
      "description":"Les poulets passent la majeure partie de leur temps à gratter l'herbe, à ramasser les grains sur le sol et à prendre de grands bains de sable. "

    },
    {
      "id":4,
      "image":"https://cdn.pratico-pratiques.com/app/uploads/sites/2/2021/10/06114812/poulet-entier-barbecue-a-l-autocuiseur.jpg",
      "titre":"Fromage",
      "url":"https://www.youtube.com/embed/FtPjdlt8Zhs",
      "description":"Les poulets passent la majeure partie de leur temps à gratter l'herbe, à ramasser les grains sur le sol et à prendre de grands bains de sable. "

    }
  ]
  ngOnInit() {
  }
  readVideo(video:any){
  return  this.sanitze.bypassSecurityTrustResourceUrl(video);

  }


  

}

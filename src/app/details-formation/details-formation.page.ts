import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.page.html',
  styleUrls: ['./details-formation.page.scss'],
})
export class DetailsFormationPage implements OnInit {

  constructor(private sanitze: DomSanitizer) { }
  videoUrl = "https://www.youtube.com/embed/FtPjdlt8Zhs";
  mesVideos = [
    {
      "id": 1,
      "image": "https://cdn.pratico-pratiques.com/app/uploads/sites/2/2021/10/06114812/poulet-entier-barbecue-a-l-autocuiseur.jpg",
      "titre": "Poulets",
      "url": "https://www.youtube.com/embed/61bPhdlqfPA",
      "description":"Les poulets passent la majeure partie de leur temps à gratter l'herbe, à ramasser les grains sur le sol et à prendre de grands bains de sable. "

    },
    {
      "id": 2,
      "image": "https://cdn.pratico-pratiques.com/app/uploads/sites/2/2021/10/06114812/poulet-entier-barbecue-a-l-autocuiseur.jpg",
      "titre": "Poulets",
      "url": "https://www.youtube.com/embed/FtPjdlt8Zhs",
      "description":"Les poulets passent la majeure partie de leur temps à gratter l'herbe, à ramasser les grains sur le sol et à prendre de grands bains de sable. "

    },
    {
      "id": 3,
      "image": "https://cdn.pratico-pratiques.com/app/uploads/sites/2/2021/10/06114812/poulet-entier-barbecue-a-l-autocuiseur.jpg",
      "titre": "Orange",
      "url": "https://www.youtube.com/embed/FtPjdlt8Zhs",
      "description":"Les poulets passent la majeure partie de leur temps à gratter l'herbe, à ramasser les grains sur le sol et à prendre de grands bains de sable. "

    },
    {
      "id": 4,
      "image": "https://cdn.pratico-pratiques.com/app/uploads/sites/2/2021/10/06114812/poulet-entier-barbecue-a-l-autocuiseur.jpg",
      "titre": "Fromage",
      "url": "https://www.youtube.com/embed/FtPjdlt8Zhs",
      "description":"Les poulets passent la majeure partie de leur temps à gratter l'herbe, à ramasser les grains sur le sol et à prendre de grands bains de sable. "
    }
  ]
  ngOnInit() {
  }
  readVideo(video: any) {
//    console.log("URL:::::::: " + video)
    {
      return this.sanitze.bypassSecurityTrustResourceUrl(video);

    }
  }
  changeV(valueC: any) {
    this.videoUrl = valueC
  }

  truncateDescription(description: string, limit: number): string {
    if (description.length <= limit) {
      return description;
    } else {
      return description.substr(0, limit) + '...'; // Truncate to 200 characters and add an ellipsis
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailForumServicesService } from 'src/app/Services/detail-forum-services.service';

@Component({
  selector: 'app-detail-forum',
  templateUrl: './detail-forum.page.html',
  styleUrls: ['./detail-forum.page.scss'],
})
export class DetailForumPage implements OnInit {
  Adama = [
    "adms", "mous","ali","jeans","bore"
  ];
  constructor(private route:ActivatedRoute,private detailThemeService:DetailForumServicesService) { }

  lesCommentaires:any
  titre:any
  ngOnInit() {
      const id_theme = +this.route.snapshot.params["id_theme"];
      this.detailThemeService.RegionsCommentaire(id_theme).subscribe(data=>{
          this.lesCommentaires = data
          for(let comm of this.lesCommentaires)
            this.titre =  comm.theme.titretheme
          
            console.log("=============== "+this.titre)
      })
  }



}

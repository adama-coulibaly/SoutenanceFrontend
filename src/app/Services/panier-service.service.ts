import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {

  constructor(private http:HttpClient) { }



    // ICI ON RECUPERE LES PRODUITS D'UN UTILISATEUR
    lesProduitsParFermes(iduser:any):Observable<any>{
      return this.http.get(`http://localhost:8080/panier/panierParUser/${iduser}`);
    }
}

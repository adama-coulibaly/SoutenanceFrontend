import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {

  constructor(private http:HttpClient) { }

// =========================================== RECUPERATION DE TOUTE LES FORMATIONS ============================
mesCategoriesFormations():Observable<any>{
  return this.http.get("http://localhost:8080/categorieFormation/lister")
}


  // =========================================== RECUPERATION DE TOUTE LES FORMATIONS ============================
  mesFormations():Observable<any>{
    return this.http.get("http://localhost:8080/formation/lister")
  }


  deuxFormation():Observable<any>{
    return this.http.get("http://localhost:8080/categorieFormation/deuxFormation")
  }

   // =========================================== UNE SEULE CATEGORIES ===================

   lesCategoriesFormationsParId(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/categorieFormation/listerId/${id}`);
  }

  // =========================================== UNE SEULE FORMATION ===================

  lesFormationsParId(idformation:any):Observable<any>{
    return this.http.get(`http://localhost:8080/formation/listerId/${idformation}`);
  }



}

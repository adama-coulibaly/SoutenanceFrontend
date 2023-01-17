import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccueilServiceService {

  constructor(private http:HttpClient) { }

  // Recuperation de toute les Produits
   lesProduits():Observable<any>{
    return this.http.get('http://localhost:8080/produit/lister');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FermeService {

  constructor(private http:HttpClient) { }

  // ICI ON RECUPERE LES FERMES DE L'UTILISATEURS CONNECTER
  mesFermes(id_ferme:any):Observable<any>{
    return this.http.get(`http://localhost:8080/ferme/UserFermes/${id_ferme}`);
  }

   // ICI ON RECUPERE LES FERMES INFORMATIONS D'UNE FERME
  infoFermes(id_ferme:any):Observable<any>{
    return this.http.get(`http://localhost:8080/ferme/infoferme/${id_ferme}`);
  }

     // ICI ON RECUPERE LES FERMES PRODUCTIONS D'UNE FERME
     lesProductions(id_ferme:any):Observable<any>{
      return this.http.get(`http://localhost:8080/production/listerParFerme/${id_ferme}`);
    }

     // ICI ON RECUPERE LES PRODUITS D'UNE FERME
     lesProduitsParFermes(id_ferme:any):Observable<any>{
      return this.http.get(`http://localhost:8080/produit/listerParFerme/${id_ferme}`);
    }

        // ICI ON RECUPERE LES PRODUITS D'UNE FERME
        lesProduitsParId(idproduit:any):Observable<any>{
          return this.http.get(`http://localhost:8080/produit/listerParid/${idproduit}`);
        }
    
      // ICI ON SUPPRIME UN PRODUIT 
      supprimerProduit(produit:any,idproduit:any):Observable<any>{
        return this.http.patch(`http://localhost:8080/produit/etat/${idproduit}`,produit)
      }
}

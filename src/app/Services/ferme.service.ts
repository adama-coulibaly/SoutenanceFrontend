import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FermeService {

  constructor(private http: HttpClient) { }








  // =========================================== ICI ON AJOUTE UNE NOUVELLE FERME

  ajouterFerme(user: any, nomferme: string, activiteferme: string, adresseferme: string, taille: string, file: any): Observable<any> {
    console.log("Service Ferme " + file)
    let data = new FormData();
    data.append("user", user);
    data.append("nomferme", nomferme);
    data.append("activiteferme", activiteferme);
    data.append("adresseferme", adresseferme);
    data.append("taille", taille);
    data.append("file", file)
    return this.http.post("http://localhost:8080/ferme/ajouter", data);
  }

    // =========================================== ICI ON AJOUTE UNE NOUVELLE FERME

    ajouterProduits(ferme:any,descriptionproduit: any, nomproduit: any, reference: any, prix: any, quantiteVente: any,categorieProd:any, file: any): Observable<any> {
      console.log("Service Ferme " + file)
      console.log("Service Ferme " + descriptionproduit)
      console.log("Service Ferme " + nomproduit)
      console.log("Service Ferme " + reference)
      console.log("Service Ferme " + ferme)

      let data = new FormData();
      data.append("file", file);
      data.append("descriptionproduit", descriptionproduit);
      data.append("nomproduit", nomproduit);
      data.append("reference", reference);
      data.append("ferme", ferme);
      data.append("prix", prix);
      data.append("quantiteVente", quantiteVente);
      data.append("categorieProd", categorieProd);
      
      return this.http.post("http://localhost:8080/produit/ajouter", data);
    }



  // ICI ON RECUPERE LES FERMES DE L'UTILISATEURS CONNECTER AVEC ETAT
  mesFermes(id_ferme: any, etat: boolean): Observable<any> {
    return this.http.get(`http://localhost:8080/ferme/UserFermesEtat/${id_ferme}/${etat}`);
  }

  // ICI ON RECUPERE LES FERMES INFORMATIONS D'UNE FERME
  infoFermes(id_ferme: any): Observable<any> {
    return this.http.get(`http://localhost:8080/ferme/infoferme/${id_ferme}`);
  }

  // ICI ON RECUPERE LES FERMES PRODUCTIONS D'UNE FERME
  lesProductions(id_ferme: any): Observable<any> {
    return this.http.get(`http://localhost:8080/production/listerParFerme/${id_ferme}`);
  }

  // ICI ON RECUPERE LES PRODUITS D'UNE FERME
  lesProduitsParFermes(id_ferme: any): Observable<any> {
    return this.http.get(`http://localhost:8080/produit/listerParFerme/${id_ferme}`);
  }
  // ICI ON RECUPERE LES PRODUITS D'UNE FERME AVEC ETAT
  lesProduitsParFermesEtat(id_ferme: any, etat: boolean): Observable<any> {
    return this.http.get(`http://localhost:8080/produit/listerParFermes/${id_ferme}/${etat}`);
  }

  // ICI ON RECUPERE LES PRODUITS D'UNE FERME
  lesProduitsParId(idproduit: any): Observable<any> {
    return this.http.get(`http://localhost:8080/produit/listerParid/${idproduit}`);
  }

  // ICI ON SUPPRIME UN PRODUIT 
  supprimerProduit(produit: any, idproduit: any): Observable<any> {
    return this.http.patch(`http://localhost:8080/produit/etat/${idproduit}`, produit)
  }

  // ICI ON SUPPRIME UNE FERME 
  supprimerFerme(produit: any, idferme: any): Observable<any> {
    return this.http.patch(`http://localhost:8080/ferme/etat/${idferme}`, produit)
  }

  // RECUPERATION DES TYPE DE PRODUCTION

  lesTypesdeProduction(): Observable<any> {
    return this.http.get("http://localhost:8080/typeproduction/liste")
  }

  categories(): Observable<any> {
    return this.http.get("http://localhost:8080/categorie/liste")
  }


  // ======================== AJOUTER UNE PRODUCTION

  ajouterProduction(production: any, idtype: any, idferme: any): Observable<any> {
    return this.http.post(`http://localhost:8080/production/ajouter/${idtype}/${idferme}`, production)
  }

  //================================================ FILTRAGE DES PRODUCTIONS

  fitrerProduction(status: any, id_ferme: any): Observable<any> {
    return this.http.get(`http://localhost:8080/production/lesProdsParStatus/${status}/${id_ferme}`)
  }

  // =============================================== LES ENUMERATIONS
  enumStatus(): Observable<any> {
    return this.http.get("http://localhost:8080/production/enum");
  }


  // =============================================== LA LISTE DES HISTOS PAR FERME
  historiqueDesVentesParFermes(idferme: any): Observable<any> {
    return this.http.get(`http://localhost:8080/historique/lesHistoriqueParFerme/${idferme}`);
  }

  // =============================================== LA LISTE DES HISTOS PAR FERME
  supprimerHisto(idhisto: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/historique/supprimer/${idhisto}`);
  }
    // ===================================================AJOUT D'UN NOUVEAU ENTRETIEN
ajouterEntretien(entretien:any,idproduction:any){
  return this.http.post(`http://localhost:8080/entretien/ajouter/${idproduction}`,entretien);

}

    // =================================================== AJOUT D'UNE NOUVELLE MORTALITE
    ajouterMortalite(entretien:any,idproduction:any){
      return this.http.post(`http://localhost:8080/mortalite/ajouter/${idproduction}`,entretien);
    
    }

  // =================================================== RECUPERATION DES ENTRETIENS D'UNE PRODUCTION
  recupererEntretienParProd(idproduction:any): Observable<any> {
    return this.http.get(`http://localhost:8080/entretien/listeParProduction/${idproduction}`);
  }
   // =================================================== RECUPERATION DES ENTRETIENS D'UNE PRODUCTION
   SupprimerEntrertien(idNtretien:any): Observable<any> {
    return this.http.delete(`http://localhost:8080/entretien/supprimer/${idNtretien}`);
  }

  SupprimerMoratlite(idNtretien:any): Observable<any> {
    return this.http.delete(`http://localhost:8080/mortalite/supprimer/${idNtretien}`);
  }

    // =================================================== RECUPERATION DES ENTRETIENS D'UNE PRODUCTION
    recupererMortaliteParProd(idproduction:any): Observable<any> {
      return this.http.get(`http://localhost:8080/mortalite/listerParProduction/${idproduction}`);
    }

     // =================================================== RECUPERATION DES ENTRETIENS D'UNE PRODUCTION
     recupererUneSeuleProd(idproduction:any): Observable<any> {
      return this.http.get(`http://localhost:8080/production/listerParID/${idproduction}`);
    }
  
}


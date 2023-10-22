import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compte } from '../classes/compte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  constructor(private httpClient: HttpClient) {}

  private BASE_URL = 'http://localhost:8082/api/v1/compte';

  getNonAffectedComptes(): Observable<Compte[]> {
    return this.httpClient.get<Compte[]>(
      `${this.BASE_URL}/compteWithoutCollab`
    );
  }
  affectCompteToCollab( idCompte: number,idCollab: number) :Observable<Compte>{
    return this.httpClient.put<Compte>(`${this.BASE_URL}/AffectCompteToCollab?compteId=${idCompte}&collaborateurId=${idCollab}`,{});
  }
  AjouterCompte(email: string): Observable<String> {
   
    return this.httpClient.post<String>(`${this.BASE_URL}/addCompte?email=${email}`, {});
  } 

}

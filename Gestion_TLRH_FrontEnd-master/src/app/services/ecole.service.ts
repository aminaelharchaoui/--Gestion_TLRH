import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collaborateur} from "../classes/collaborateur";

@Injectable({
  providedIn: 'root'
})
export class EcoleService {
  constructor(private httpClient: HttpClient) {
  }

  private BASE_URL = "http://localhost:8082/api/v1/ecole";
  getPourcentagesParEcole(): Observable<any> {
    return this.httpClient.get<any>(`${this.BASE_URL}/pourcentage/ecole`);
  }

}

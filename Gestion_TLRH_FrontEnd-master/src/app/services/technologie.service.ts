import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Technologie} from "../classes/technologie";

@Injectable({
  providedIn: 'root'
})
export class TechnologieService {

  private BaseUrl = "http://localhost:8082/api/v1/technologie";
  constructor(private httpClient :HttpClient) { }

  getAllTechnologies():Observable<Technologie[]>{
    return this.httpClient.get<Technologie[]>(`${this.BaseUrl}/get/all`);
  }

  getTechnologieById(id:number) {
    return this.httpClient.get<Technologie>(`${this.BaseUrl}/get/By/Id?id=${id}`);
  }

}

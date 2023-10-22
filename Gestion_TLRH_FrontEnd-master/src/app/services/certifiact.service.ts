import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Certificat} from "../classes/certificat";

@Injectable({
  providedIn: 'root'
})
export class CertifiactService {

  private BASE_URL = "http://localhost:8082/api/v1/certificat";
  constructor(private httpClient : HttpClient) { }

  getCertificatById(id: number): Observable<Certificat> {
    return this.httpClient.get<Certificat>(`${this.BASE_URL}/get/id?id=${id}`);
  }

  getAllCertificats(): Observable<Certificat[]> {
    return this.httpClient.get<Certificat[]>(`${this.BASE_URL}/get/all`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../classes/role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = 'http://localhost:8082/api/v1/role';
  constructor(private httpClient :HttpClient) { }

  getRoleById(id :number):Observable<Role>{
    return this.httpClient.get<Role>(`${this.baseUrl}/get/By/Id?idRole=${id}`);
  }




  getAllRoles():Observable<Role[]>{
    return this.httpClient.get<Role[]>(`${this.baseUrl}/get/all`);
  }
  // getAllRoles(): Observable<Role[]> {
  //   return this.httpClient.get<Role[]>(
  //     `${this.BASE_URL}/getRoles`
  //   );
  // }
}

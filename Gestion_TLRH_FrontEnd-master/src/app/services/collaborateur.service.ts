import {Injectable, Optional} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collaborateur } from '../classes/collaborateur';
import {types} from "sass";
import List = types.List;
import {UpdateBy3ActorsDto} from "../classes/UpdateBy3ActorsDto";

@Injectable({
  providedIn: 'root',
})
export class CollaborateurService {
  constructor(private httpClient: HttpClient) {}

  private BASE_URL = 'http://localhost:8082/api/v1/collaborateur';

  getAllManagerRH(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/all/Managers`
    );
  }
  getNonManagerRH(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/NonManagers`
    );
  }

  getNonAffectedCollabs(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/nonAffectedCollabs`
    );
  }

  getMangerWithoutAcc() {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/ManagerWithoutAcc`
    );
  }

  getAllCollaborateur(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(`${this.BASE_URL}/get/all`);
  }

  getCollaborateurById(id:number): Observable<Collaborateur> {
    return this.httpClient.get<Collaborateur>(`${this.BASE_URL}/get/Collaborateur/byId/${id}`);
  }

  getMaleRatio(): Observable<number> {
    return this.httpClient.get<number>(`${this.BASE_URL}/get/MaleRatio`);
  }
  getFemaleRatio(): Observable<number> {
    return this.httpClient.get<number>(`${this.BASE_URL}/get/FemaleRatio`);
  }
  getRecruitmentEvolution(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/getRecruitmentEvolution`);
  }

  getDiplomeRatios(): Observable<Map<string, number>> {
    return this.httpClient.get<Map<string, number>>(
      `${this.BASE_URL}/get/DiplomaRatios`
    );
  }

  getSalaryEvolutionOfCollab(id:number): Observable<any>{
    return this.httpClient.get<Map<number, number>>(`${this.BASE_URL}/SalaryEvolution/${id}`);
  }

  CalculateTurnOver(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/get/TurnOver/Annee`);
  }

  getTechnologies(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.BASE_URL}/get/competences/${id}`);
  }

  getSalaryEvolutions(id: number): Observable<Map<Date, number>> {
    return this.httpClient.get<Map<Date, number>>(`${this.BASE_URL}/evolution/${id}`);

  }
  getPostAPPEvolution(collaborateurId: number): Observable<Map<number, string[]>> {
    return this.httpClient.get<Map<number, string[]>>(`${this.BASE_URL}/get/EvolutionPostAPP/${collaborateurId}`);
  }

  updateCollaborateurBy3Actors(matricule: number, collaborateurDto: UpdateBy3ActorsDto): Observable<any> {
    const url = `${this.BASE_URL}/update/By3Actors?matricule=${matricule}`;
    return this.httpClient.put<Collaborateur>(url, collaborateurDto);
  }

  createCollaborateur(collab: Collaborateur): Observable<Collaborateur> {
    return this.httpClient.post<Collaborateur>(`${this.BASE_URL}/createCollaborateur`, collab);
  }
  findCollabsAssociatedToManagerRH(idManagerRH: number): Observable<any> {
    return this.httpClient.get<any>(`${this.BASE_URL}/get/collaborators/associated/managerRH/${idManagerRH}`);
  }
  updateCollaborateurByManager(collaborateur :Collaborateur , matricule: number): Observable<Collaborateur> {
    return this.httpClient.put<Collaborateur>(`${this.BASE_URL}/update/ByManager?matricule=${matricule}`,collaborateur);
  }
  getCollaborateurByID(id: number): Observable<Collaborateur> {
    return this.httpClient.get<Collaborateur>(`${this.BASE_URL}/get/by/matricule?matricule=${id}`);
  }
  createManagerRh(id: number): Observable<Collaborateur> {
    return this.httpClient.post<Collaborateur>(`${this.BASE_URL}/createManagerRH/${id}`, null);
  }

  AssignCollaborateursToManager(collaborateurMatricules: number[], managerMatricule: number): Observable<Collaborateur[]> {
    const collaborateurMatriculesQuery = collaborateurMatricules.join('&');
    const url = `${this.BASE_URL}/assignCollaborateursToManager?collaborateurMatricules=${collaborateurMatriculesQuery}&managerMatricule=${managerMatricule}`;

    return this.httpClient.put<Collaborateur[]>(url, {});
  }

  AssignCollaborateurToManager(collaborateurMatricule: number, managerMatricule: number): Observable<Collaborateur> {
    return this.httpClient.put<Collaborateur>(`${this.BASE_URL}/assignCollaborateurToManager?collaborateurMatricule=${collaborateurMatricule}&managerMatricule=${managerMatricule}`, {});
  }
  collabWithoutCompte(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(`${this.BASE_URL}/get/CollabWithoutCompte`);
  }

  getManagerRHWithStatusDesactivated():Observable<Collaborateur[]>{
    return this.httpClient.get<Collaborateur[]>(`${this.BASE_URL}/get/ManagerRH/Desactivated`);
  }

  getManagerRHWithStatusActivated():Observable<Collaborateur[]>{
    return this.httpClient.get<Collaborateur[]>(`${this.BASE_URL}/get/ManagerRH/Activated`);
  }

  ActivateStatusManagerRH(matricule:number):Observable<Collaborateur>{
    return this.httpClient.put<Collaborateur>(`${this.BASE_URL}/ActivateStatusManagerRH?matricule=${matricule}`, {});
  }

  DesactivateStatusManagerRH(matricule:number):Observable<Collaborateur>{
    return this.httpClient.put<Collaborateur>(`${this.BASE_URL}/DesactivateStatusManagerRH?matricule=${matricule}`, {});
  }

  exportCollaboratorsToExcelFile(): Observable<ArrayBuffer> {
    const url = `${this.BASE_URL}/export/collaborateursData`;
    return this.httpClient.get(url, {
      responseType: 'arraybuffer',
    });
  }

  uploadCollaborateursExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.httpClient.post<any>(`${this.BASE_URL}/upload/collaborateursData`, formData);
  }


}

import { Component, OnInit } from '@angular/core';
import {CollaborateurService} from "../../services/collaborateur.service";
import {Router} from "@angular/router";
import {Collaborateur} from "../../classes/collaborateur";

@Component({
  selector: 'app-get-all-collaborateurs',
  templateUrl: './get-all-collaborateurs.component.html',
  styleUrls: ['./get-all-collaborateurs.component.css']
})
export class GetAllCollaborateursComponent {
  collaborateurs : Collaborateur[];
  constructor(private collaborateurService:CollaborateurService,private router:Router) {}

  ngOnInit(): void {
    this.getAllCollaborateurs();
  }
  getAllCollaborateurs(){
    this.collaborateurService.getAllCollaborateur().subscribe(data=>{
      this.collaborateurs=data;
      console.log(data);  },
      error => console.log(error));
  }
  updateCollaborateur(matricule: number){
    this.router.navigate(['/dashboard/update-collaborateur', matricule]);
  }
 technologie(matricule: number) {
   this.router.navigate(['/dashboard/Technologies', matricule]);
  }
  SalaryEvolution(matricule: number) {
    this.router.navigate(['/dashboard/salaryEvolution', matricule]);
  }
}



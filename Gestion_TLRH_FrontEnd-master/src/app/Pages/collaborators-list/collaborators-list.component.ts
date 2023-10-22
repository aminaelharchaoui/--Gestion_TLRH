import { Component } from '@angular/core';
import {Collaborateur} from "../../classes/collaborateur";
import {CollaborateurService} from "../../services/collaborateur.service";
import {Router} from "@angular/router";
import {
  UpdateCollaboratorByTreeactorsComponent
} from "../update-collaborator-by-treeactors/update-collaborator-by-treeactors.component";

@Component({
  selector: 'app-collaborators-list',
  templateUrl: './collaborators-list.component.html',
  styleUrls: ['./collaborators-list.component.css']
})
export class CollaboratorsListComponent {
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

  updateCollaborator(ID: number) {
    this.router.navigate(['/dashboard/updateCollaboratorsBy3Actor', ID]);

  }
  technologie(matricule: number) {
    this.router.navigate(['/dashboard/Technologies', matricule]);
   }
   SalaryEvolution(matricule: number) {
     this.router.navigate(['/dashboard/salaryEvolution', matricule]);
   }
  VersADD() {
  this.router.navigateByUrl('/dashboard/add');
  }
}

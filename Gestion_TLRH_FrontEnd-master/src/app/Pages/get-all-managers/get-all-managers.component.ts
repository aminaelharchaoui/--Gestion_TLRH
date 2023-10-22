import { Component, OnInit } from '@angular/core';
import {CollaborateurService} from "../../services/collaborateur.service";
import {Router} from "@angular/router";
import {Collaborateur} from "../../classes/collaborateur";

@Component({
  selector: 'app-get-all-managers',
  templateUrl: './get-all-managers.component.html',
  styleUrls: ['./get-all-managers.component.css']
})
export class GetAllManagersComponent implements OnInit {

  managers !: Collaborateur[];
  constructor(private collaborateurService:CollaborateurService,private router:Router) {}

  ngOnInit(): void {
    this.getAllManagers();
  }
  getAllManagers(){
    this.collaborateurService.getAllManagerRH().subscribe(data=>{
      this.managers=data;
      console.log(data);  },
      error => console.log(error));
  }
  redirectNonAffectedCollabs(matricule: number) {
    this.router.navigate(['/dashboard/nonAffectedCollabs', matricule]);
  }



}

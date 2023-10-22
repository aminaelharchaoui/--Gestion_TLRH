import {Component, OnInit} from '@angular/core';
import {CollaborateurService} from "../../services/collaborateur.service";
import {Router} from "@angular/router";
import {Collaborateur} from "../../classes/collaborateur";

@Component({
  selector: 'app-get-non-affected-collabs',
  templateUrl: './get-non-affected-collabs.component.html',
  styleUrls: ['./get-non-affected-collabs.component.css']
})
export class GetNonAffectedCollabsComponent implements OnInit {

  nonAffectedCollabs !: Collaborateur[];
  Collaborateur : Collaborateur;
  constructor(private collaborateurService:CollaborateurService,private router:Router) { }

  ngOnInit() {
    this.getNonAffectedCollabs();
  }

  getNonAffectedCollabs(){
    this.collaborateurService.getNonAffectedCollabs().subscribe(data=>{
        this.nonAffectedCollabs=data;
        console.log(data);  },
      error => console.log(error));
  }

}

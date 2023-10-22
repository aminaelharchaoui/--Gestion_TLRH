import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Collaborateur } from 'src/app/classes/collaborateur';
import { CollaborateurService } from 'src/app/services/collaborateur.service';

@Component({
  selector: 'app-collab-non-affected-manager',
  templateUrl: './collab-non-affected-manager.component.html',
  styleUrls: ['./collab-non-affected-manager.component.css']
})
export class CollabNonAffectedManagerComponent implements OnInit {

  nonAffectedCollabs !: Collaborateur[];

  constructor(private collaborateurService:CollaborateurService,private router:Router,private route:ActivatedRoute) { }

  idManager: number ;
  Collaborateur : Collaborateur;

  ngOnInit() {
    this.getNonAffectedCollabs();
    this.idManager = this.route.snapshot.params['matricule'];
    console.log("id manager",this.idManager);
  }

  getNonAffectedCollabs(){
    this.collaborateurService.getNonAffectedCollabs().subscribe(data=>{
      this.nonAffectedCollabs=data;
      console.log(data);  },
      error => console.log(error));
  }

  affecterCollabToManager(matriculeCollab: number) {
    this.collaborateurService.AssignCollaborateurToManager(matriculeCollab, this.idManager).subscribe(
      (data) => {
        console.log(data);
        this.getNonAffectedCollabs();
        alert("Collaborateur affecté avec succès");
      },
      (error) => {
        console.log(error);
        alert("Erreur lors de l'affectation");
       }
    );
  }


}

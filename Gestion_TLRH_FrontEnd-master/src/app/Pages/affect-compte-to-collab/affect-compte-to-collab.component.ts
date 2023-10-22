import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { th } from 'date-fns/locale';
import { Collaborateur } from 'src/app/classes/collaborateur';
import { Compte } from 'src/app/classes/compte';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-affect-compte-to-collab',
  templateUrl: './affect-compte-to-collab.component.html',
  styleUrls: ['./affect-compte-to-collab.component.css']
})
export class AffectCompteToCollabComponent implements OnInit{
  comptes:Compte[];
  collabs:Collaborateur[];
  selectedCollab: Collaborateur | null = null; // Variable to hold selected collaborator
  selectedCompte: Compte | null = null;

  constructor(private router: Router, 
    private collaborateurService: CollaborateurService,
    private compteService:CompteService,
    private _formBuilder: FormBuilder){ }

    ngOnInit(): void {
      this.getCompteWithoutCollab();
      this.getCollabWithoutCompte();
    }
    firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    });
    getCompteWithoutCollab(){
      this.compteService.getNonAffectedComptes().subscribe(data=>{
        this.comptes=data;
      }
      );
    }
    getCollabWithoutCompte(){
      this.collaborateurService.collabWithoutCompte().subscribe(data=>{
        this.collabs=data;
      }
      );
    }
    affectCompteToCollab(){
      if (this.selectedCollab && this.selectedCompte) {
        location.reload();
      console.log(this.selectedCollab.matricule,this.selectedCompte.id);
      this.compteService.affectCompteToCollab(this.selectedCompte.id,this.selectedCollab.matricule).subscribe(data=>{
        console.log(data);
        this.getCompteWithoutCollab();
        this.getCollabWithoutCompte();
      }
      );
    }
    
    
  }
}

  



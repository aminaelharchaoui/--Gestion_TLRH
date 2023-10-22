import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CompteService } from 'src/app/services/compte.service';
import { Collaborateur } from "../../classes/collaborateur";
import { CollaborateurService } from 'src/app/services/collaborateur.service';
@Component({
  selector: 'app-create-compte1',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent  {



  constructor(
    private route: ActivatedRoute,
private collaborateurservice: CollaborateurService
    
    , private router: Router, private compteService: CompteService) {
    }
 
  emailInput: string

  onSubmit() {
    
    this.compteService.AjouterCompte(this.emailInput).subscribe(
      data => {
       
          console.log(data);
          // this.emailInput=this.emailInput;
        }
    ,
      error => console.log(error)
    );
     location.reload();
  }




}
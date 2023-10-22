import { Component } from '@angular/core';
import { Collaborateur } from 'src/app/classes/collaborateur';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import {ActivatedRoute, Router} from "@angular/router";
import { get } from 'http';

@Component({
  selector: 'app-get-non-managers',
  templateUrl: './get-non-managers.component.html',
  styleUrls: ['./get-non-managers.component.css']
})
export class GetNonManagersComponent {
  nonManagers : Collaborateur[];
  constructor(private collaborateurService:CollaborateurService,private router:Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getNonManagers();
  }

  getNonManagers(){
    this.collaborateurService.getNonManagerRH().subscribe(data=>{
      this.nonManagers=data;
      console.log(data);  },
      error => console.log(error));
  }
  createManager(id:number){

     location.reload();
    this.collaborateurService.createManagerRh(id).subscribe(); 
    
  }
}

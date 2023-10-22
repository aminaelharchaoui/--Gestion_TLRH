import {Component, OnInit} from '@angular/core';
import {CollaborateurService} from "../../services/collaborateur.service";
import {Collaborateur} from "../../classes/collaborateur";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-managers-rh-with-status-activated',
  templateUrl: './get-managers-rh-with-status-activated.component.html',
  styleUrls: ['./get-managers-rh-with-status-activated.component.css']
})
export class GetManagersRhWithStatusActivatedComponent implements OnInit{

  managers: Collaborateur [] = [];

  constructor(private collaborateurService :CollaborateurService,private router :Router) {}

  ngOnInit(): void {
    this.GetManagersRhWithStatusActivated();
  }

  GetManagersRhWithStatusActivated() {
    this.collaborateurService.getManagerRHWithStatusActivated().subscribe(
      (data) => {
        this.managers = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  desactiverStatut(id:number){
    this.collaborateurService.DesactivateStatusManagerRH(id).subscribe(
      (data) => {
        this.GetManagersRhWithStatusActivated();
        alert("Le manager RH a été désactivé avec succès");
        this.router.navigate(['/dashboard/ManagersRH/Desactivated']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  redirectNonAffectedCollabs(matricule :number){
    this.router.navigate(['/dashboard/nonAffectedCollabs',matricule]);
  }

}

import {Component, OnInit} from '@angular/core';
import {CollaborateurService} from "../../services/collaborateur.service";
import {Collaborateur} from "../../classes/collaborateur";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-managers-rh-with-status-desactivated',
  templateUrl: './get-managers-rh-with-status-desactivated.component.html',
  styleUrls: ['./get-managers-rh-with-status-desactivated.component.css']
})
export class GetManagersRhWithStatusDesactivatedComponent implements OnInit{

  managers :Collaborateur[] = [];
  constructor(private collaborateurService :CollaborateurService,private router: Router) {
  }

  ngOnInit(): void {
    this.GetManagersRhWithStatusDesactivated();
  }

  GetManagersRhWithStatusDesactivated() {
    this.collaborateurService.getManagerRHWithStatusDesactivated().subscribe(
      (data) => {
        this.managers = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ActivateStatus(id:number){
    this.collaborateurService.ActivateStatusManagerRH(id).subscribe(
      (data) => {
        console.log(data);
        alert("Le manager RH a été activé avec succès");
        this.router.navigate(['/dashboard/ManagersRH/Activated']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Collaborateur } from 'src/app/classes/collaborateur';
import { CollaborateurService } from 'src/app/services/collaborateur.service';

@Component({
  selector: 'app-collab-affected-manager',
  templateUrl: './collab-affected-manager.component.html',
  styleUrls: ['./collab-affected-manager.component.css']
})
export class CollabAffectedManagerComponent {
  AffectedCollabs !: Collaborateur[];
  idManagerRH: number; 

  constructor(private collaborateurService: CollaborateurService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idManagerRH = +params['id'];
      this.getAffectedCollabs();
    });
  }

  getAffectedCollabs() {
    this.collaborateurService.findCollabsAssociatedToManagerRH(this.idManagerRH).subscribe(data => {
      this.AffectedCollabs = data;
      console.log(data);
    },
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
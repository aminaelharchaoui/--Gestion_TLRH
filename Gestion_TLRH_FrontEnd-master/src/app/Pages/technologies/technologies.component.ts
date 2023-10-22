import { Component, OnInit } from '@angular/core';
import { CollaborateurService } from "../../services/collaborateur.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  technologies: any[];
  collaborateurId: number;

  constructor(private collaborateurService: CollaborateurService,
     private route: ActivatedRoute,
     private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.collaborateurId = +params['id']; 

      this.collaborateurService.getTechnologies(this.collaborateurId).subscribe((data: Map<number, number>) => {
        this.technologies = Object.entries(data).map(([technologie, niveau]) => ({
          name: technologie.toString(),
          value: niveau
        }));

      });
    });
  }
  listcollab() {
    this.router.navigate(['/dashboard/collaborateurs']);
  }
}
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { Chart, ChartType, ChartOptions, ChartData } from 'chart.js/auto';

interface SalaryData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-salary-evolution-of-collab',
  templateUrl: './salary-evolution-of-collab.component.html',
  styleUrls: ['./salary-evolution-of-collab.component.css']
})
export class SalaryEvolutionOfCollabComponent implements OnInit {
  salaryEvolution: SalaryData[]; 
  collaboratorId: number;
  selectedChartType: string = 'bar'; 
  chart: Chart;

  constructor(
    private collaborateurService: CollaborateurService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.collaboratorId = +params['id']; 
      this.collaborateurService
        .getSalaryEvolutionOfCollab(this.collaboratorId)
        .subscribe((data: Map<number, number>) => {
          this.salaryEvolution = Object.entries(data).map(([year, salary]) => ({
            name: year.toString(),
            value: salary
          }));
        });
    });
  }
  listcollab() {
    this.router.navigate(['/dashboard/listofcollaboratorstoupdate']);

  }


}

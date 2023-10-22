import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartType, ChartOptions, ChartData } from 'chart.js/auto';

import { CollaborateurService } from 'src/app/services/collaborateur.service';

interface SalaryData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-salary-pie',
  templateUrl: './salary-pie.component.html',
  styleUrls: []

})
export class salaryPieComponent {
  salaryEvolution: Map<number, number>;
  collaboratorId: number;
  selectedChartType: ChartType = 'pie'; 
  chart: Chart;

  @ViewChild('test') testCanvas: ElementRef;

  constructor(
    private collaborateurService: CollaborateurService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.collaboratorId = +params['id'];
      this.collaborateurService
        .getSalaryEvolutionOfCollab(this.collaboratorId)
        .subscribe((data: Map<number, number>) => {
          this.salaryEvolution = data;
          this.graphRepresentingSalaryEvolutionOfCollab(this.salaryEvolution);
        });
    });
  }

  graphRepresentingSalaryEvolutionOfCollab(data: Map<number, number>): void {
    const labels = Object.keys(data);
    const values = Object.values(data);
    const ctx = this.testCanvas.nativeElement.getContext('2d');
    
    if (ctx) {
      if (this.chart) {
        this.chart.destroy(); 
      }
      if(this.selectedChartType == 'pie'){
      this.chart = new Chart(ctx, {
        type: this.selectedChartType,
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Salaire',
              data: values,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
              ],
              borderWidth: 1,
            },
          ],
        } as ChartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
           
          },
        },
      });
    }
  }
}
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-salary-evoltion-graph',
  templateUrl: './salary-evoltion-graph.component.html',
})
export class SalaryEvoltionGraphComponent implements OnInit {

  chart: Chart<'line'>;
  
  testData: Map<Date,number> = new Map([
    [new Date(2019, 1, 1), 1000],
    [new Date(2019, 2, 1), 2000],
    [new Date(2019, 3, 1), 3000],
    [new Date(2019, 4, 1), 4000],
    [new Date(2019, 5, 1), 5000],
    [new Date(2019, 6, 1), 6000],
    [new Date(2019, 7, 1), 7000],
  ]);

  salaryArchive: Map<Date,number>

  constructor(private collaborateurService : CollaborateurService) { }

  ngOnInit() {
    this.salaryArchive = this.testData;
    if(this.evolutionGraphCanvas){
      this.showChart();
    }
  }

  @ViewChild('evolutionGraph') evolutionGraphCanvas: ElementRef;
  private destroyChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private showChart(): void {
    this.chart = new Chart(this.evolutionGraphCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: Array.from(this.salaryArchive.keys()).map((date) => date.toLocaleDateString()),
        datasets: [
          {
            label: 'Salaire',
            data: Array.from(this.salaryArchive.values()),
            fill: false,
            borderColor: '#4bc0c0',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'month',
            },
          },
        },
      },
    });
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CollaborateurService } from "../../services/collaborateur.service";
import { ChartData } from "chart.js";

@Component({
  selector: 'app-Male-Female-ratio',
  templateUrl: './ratio.component.html',
  styleUrls: ['./ratio.component.css']
})
export class RatioComponent implements OnInit {
  chart: Chart<'pie'>;
  femaleRatio: number;
  maleRatio: number;
  constructor(private collaborateurService: CollaborateurService) { }

  ngOnInit(): void {
    this.collaborateurService.getFemaleRatio().subscribe(
      ratio => {
        this.femaleRatio = ratio;
        if (this.ratioChartCanvas) {
          this.showChart();
        }
      },
      error => {
        console.error('Error fetching female Male-Female-ratio:', error);
      }
    );

    this.collaborateurService.getMaleRatio().subscribe(
      ratio => {
        this.maleRatio = ratio;
        if (this.ratioChartCanvas) {
          this.showChart();
        }
      },
      error => {
        console.error('Error fetching male Male-Female-ratio:', error);
      }
    );
  }


  @ViewChild('ratioChart') ratioChartCanvas: ElementRef;

  private destroyChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private showChart(): void {
    this.destroyChart();

    const ctx = this.ratioChartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Femmes', 'Hommes'],
          datasets: [{
            label: 'Ratio Femmes / Hommes',
            data: [this.femaleRatio, this.maleRatio],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          // Pie chart-specific options
          plugins: {
            legend: {
              position: 'top' // Ajuste la position de la légende si nécessaire
            }
          }
        },
      });
    }
  }
}

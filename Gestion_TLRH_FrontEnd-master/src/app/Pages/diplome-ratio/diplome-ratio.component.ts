import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { Chart, ChartData} from 'chart.js/auto';
import { create } from 'd3-selection';
import {DiplomeService} from "../../services/diplome.service";

@Component({
  selector: 'app-diplome-ratio',
  templateUrl: './diplome-ratio.component.html',
})
export class DiplomeRatioComponent implements OnInit {
  diplomaRatios: Map<string, number> = new Map<string, number>();
  chart: Chart<'pie'>;

  constructor(private diplomeService: DiplomeService) {}

  ngOnInit() {
    this.getRatios();
  }

  getRatios() {
    this.diplomeService.getDiplomeRatios().subscribe(
      (data: Map<string, number>) => {
        this.diplomaRatios = data;
        this.createChart(this.diplomaRatios);
      },
      (error) => {
        console.error('Error fetching ratios:', error);
      }
    );
  }

  @ViewChild('DiplomeRatio') DiplomeRatioChartCanvas: ElementRef;
  createChart(data: Map<string,number>): void {

    const labels = Object.keys(data);
    const values = Object.values(data);

    const ctx = this.DiplomeRatioChartCanvas.nativeElement.getContext(
      '2d'
    );
    if (ctx) {
      this.chart != new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Pourcentages Par Type de Diplome',
              data: values,
              backgroundColor: [
                'rgb(85,137,199)',
                'rgb(61,18,105)',
                'rgba(0,54,110,0.6)',
                'rgb(89,20,36)',
                'rgba(255, 206, 86, 0.6)',
                'rgb(203,52,87)',
              ],
              borderColor: 'rgb(255,255,255)',
              borderWidth: 1,
            },
          ],
        } as ChartData<'pie', number[], unknown>, // Type assertion here
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: "Ratio des diplômes",
            },
          },
        },
      });
    }
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart} from 'chart.js/auto';
import { EcoleService } from "../../services/ecole.service";
import {ChartData} from "chart.js";

@Component({
  selector: 'app-pourcentages-par-ecole',
  templateUrl: './pourcentages-par-ecole.component.html',
  styleUrls: ['./pourcentages-par-ecole.component.css']
})
export class PourcentagesParEcoleComponent implements OnInit {
  chart: Chart<'pie'>;

  constructor(private ecoleService: EcoleService) {}

  ngOnInit(): void {
    this.ecoleService.getPourcentagesParEcole().subscribe(
      (data: any[]) => {
        this.createChart(data);
        console.log('data:==========> ', data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  @ViewChild('PourcentageParEcole') PourcentageParEcoleChartCanvas: ElementRef;

  createChart(data: any[]): void {
    const labels = data.map(item => Object.keys(item)[0]);
    const values = data.map(item => Object.values(item)[0]);

    const ctx = this.PourcentageParEcoleChartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart != new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Pourcentages Par Ecole',
              data: values ,
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
        } as ChartData<"pie", number[], unknown>, // Type assertion here
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
      });

    }
  }

}

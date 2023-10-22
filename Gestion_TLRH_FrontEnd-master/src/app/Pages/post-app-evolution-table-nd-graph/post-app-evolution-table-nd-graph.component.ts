import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CollaborateurService} from "../../services/collaborateur.service";
import {Chart} from "chart.js/auto";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-post-app-evolution-table-nd-graph',
  templateUrl: './post-app-evolution-table-nd-graph.component.html',
  styleUrls: ['./post-app-evolution-table-nd-graph.component.css']
})

export class PostAppEvolutionTableNdGraphComponent implements OnInit {
  chart: Chart<'pie'>;
  postevolution: Map<number, string[]>;
  collaborateurId: number;
  @ViewChild('chart') private ref: ElementRef;


  constructor(private collaborateurservice: CollaborateurService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.collaborateurId = +params['id'];
      this.fetchDataAndShowChart(this.collaborateurId);
    });
  }


  private fetchDataAndShowChart(collaborateurId: number): void {
    this.collaborateurservice.getPostAPPEvolution(collaborateurId).subscribe(
      data => {
        this.postevolution = data;
        this.showChart();
        console.log(data);
      },
      error => {
        console.error('Error fetching Post App Evolution data:', error);
      }

    );

  }


  private destroyChart(): void {

    if (this.chart) {
      this.chart.destroy();
    }
  }

  private showChart() {
    this.destroyChart();

    const ctx = this.ref.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: Object.keys(this.postevolution),
          datasets: [
            {
              label: 'Évolution des postes',
              data: Object.values(this.postevolution).map(values => values.length),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1
            }
          ]
        },options: {
          plugins: {
            legend: {
              display: false
            }
          },
          cutout: '80%',
        },
      });
    }
  }

}






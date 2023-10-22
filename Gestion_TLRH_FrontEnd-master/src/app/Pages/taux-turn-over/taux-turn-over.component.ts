import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CollaborateurService} from "../../services/collaborateur.service";
import {Chart} from "chart.js/auto";

@Component({
  selector: 'app-taux-turn-over',
  templateUrl: './taux-turn-over.component.html',
  styleUrls: ['./taux-turn-over.component.css']
})
export class TauxTurnOverComponent implements OnInit{

  TurnOverData: any[];

  constructor(private collaborateurService: CollaborateurService) {}

  ngOnInit(): void {
    this.collaborateurService.CalculateTurnOver().subscribe(data => {
      console.log(data);
      this.TurnOverData = Object.entries(data).map(([year, count]) => ({ name: year, value: count }));
    });
  }
}

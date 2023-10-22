import {Component, OnInit} from '@angular/core';
import {Collaborateur} from "../../classes/collaborateur";
import {CollaborateurService} from "../../services/collaborateur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-manager-without-acc',
  templateUrl: './get-manager-without-acc.component.html',
  styleUrls: ['./get-manager-without-acc.component.css']
})
export class GetManagerWithoutAccComponent implements OnInit{
  managerWithoutAcc !: Collaborateur[];

  constructor(private collaborateurService:CollaborateurService,private router:Router) {
  }

  ngOnInit(): void {
    this.getManagerWithoutAcc();
  }

  private getManagerWithoutAcc() {
    this.collaborateurService.getMangerWithoutAcc().subscribe(data=>{
        this.managerWithoutAcc=data;
        console.log(data);  },
      error => console.log(error));
  }
}

import { Component, OnInit } from '@angular/core';
import { CollaborateurService } from '../../services/collaborateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborateur } from '../../classes/collaborateur';
import { UpdateBy3ActorsDto } from '../../classes/UpdateBy3ActorsDto';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-collaborator-by-treeactors',
  templateUrl: './update-collaborator-by-treeactors.component.html',
  styleUrls: ['./update-collaborator-by-treeactors.component.css'],
})
export class UpdateCollaboratorByTreeactorsComponent implements OnInit {
  myForm: FormGroup;
  collaborateur: Collaborateur = new Collaborateur();
  id!: number;
  managersRH: Collaborateur[] = [];

  constructor(
    private collaborateurservice: CollaborateurService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.myForm = new FormGroup({
      salaireActuel: new FormControl(''),
      poste: new FormControl(''),
      managerRH: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });

    this.collaborateurservice.getCollaborateurById(this.id).subscribe(
      (data) => {
        this.collaborateur = data;

        this.myForm.patchValue({
          salaireActuel: this.collaborateur.salaireActuel,
          poste: this.collaborateur.posteAPP,
          managerRH: this.collaborateur.managerRH.matricule,
        });
      },
      (error) => console.log(error)
    );

    this.collaborateurservice.getAllManagerRH().subscribe((managers) => {
      this.managersRH = managers;
    });
  }

  goToCollaborateurList() {
    this.router.navigate(['/dashboard/listofcollaboratorstoupdate']);
  }

  modifierCollaborateur() {
    const collaborateurDto: UpdateBy3ActorsDto = {
      matricule: this.id,
      salaireActuel: this.myForm.get('salaireActuel')?.value,
      posteAPP: this.myForm.get('poste')?.value,
      managerRH: this.myForm.get('managerRH')?.value,
    };
    this.collaborateurservice
      .updateCollaborateurBy3Actors(this.id, collaborateurDto)
      .subscribe(
        (data) => {
          console.log(data);
          this.goToCollaborateurList();
        },
        (error) => console.log(error)
      );
  }
}

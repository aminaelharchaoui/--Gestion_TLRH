import { Component,OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl , FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Collaborateur } from 'src/app/classes/collaborateur';
import { Role } from 'src/app/classes/role';
import { Technologie } from 'src/app/classes/technologie';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { RoleService } from 'src/app/services/role.service';
import {Diplome} from "../../classes/diplome";

@Component({
  selector: 'app-add-collab',
  templateUrl: './add-collab.component.html',
  styleUrls: ['./add-collab.component.css'],
})
export class AddCollabComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,private collaborateurService:CollaborateurService,private roleService:RoleService) {

  }
  managers:Collaborateur[];
  roles:Role[]=[];
  collab:Collaborateur=new Collaborateur();
  selectedRole: Role[] = [];
  selectedManager: Collaborateur[] = [];
  num:number=0;
  technologies:Technologie[]=[];
  diplomes: Diplome[] = [];



  ngOnInit() {
    this.getManagers();
    this.getRoles();
   }
  getRoles() {
    this.roleService.getAllRoles().subscribe(
      (data) => {
        this.roles = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  getManagers() {
    this.collaborateurService.getAllManagerRH().subscribe(
      (data) => {
        this.managers = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  firstFormGroup = this._formBuilder.group({
  firstCtrl: ['', Validators.required],
});
  secondFormGroup: FormGroup = this._formBuilder.group({
    niveau: [''],
    ecole: [''],
    typeEcole: [''],
    typeDiplome: [''],
    promotion: [''],
  });
thirdFormGroup = this._formBuilder.group({
  thirdCtrl: ['', Validators.required],
});

 generateNumberArray(length: number): number[] {
  console.log(Array.from({ length }, (_, index) => index));
  return Array.from({ length }, (_, index) => index);
}

  addDiploma() {
    // Create a separate object to hold the diploma information
    const newDiplomeData = {
      niveau: this.secondFormGroup.value.niveau,
      ecole: this.secondFormGroup.value.ecole,
      type: this.secondFormGroup.value.typeDiplome,
      promotion: this.secondFormGroup.value.promotion,
    };

    // Create a new Diplome object with a valid id
    const newDiplome: Diplome = {
      id: 1,
      type: newDiplomeData.type,
      niveau: newDiplomeData.niveau,
      promotion: newDiplomeData.promotion,
      ecole: {
        id: 2,
        nom: newDiplomeData.ecole,
        diplomes: [],
      },
    };

    // Assign the new diploma to the collaborator
    this.collab.diplomes.push(newDiplome);

    console.log("Collaborateur with diplome testtttttt",this.collab);
  }


  submitForm():void {
  console.log(this.technologies);
  console.log(this.collab.roles);
  this.collab.roles = [...this.selectedRole];

  console.log(this.collab.roles);
  console.log(this.collab);
  console.log(this.collab.managerRH);


  this.collaborateurService.createCollaborateur(this.collab).subscribe(
    (data) => {
      console.log(data);
      this.collab = new Collaborateur();
    }
    ,error => console.log(error)
  );
}






}


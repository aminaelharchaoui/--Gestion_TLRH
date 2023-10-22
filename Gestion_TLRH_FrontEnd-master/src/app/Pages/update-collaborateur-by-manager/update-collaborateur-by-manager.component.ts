import {Component, OnInit} from '@angular/core';
import {Collaborateur} from "../../classes/collaborateur";
import {CollaborateurService} from "../../services/collaborateur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Technologie} from "../../classes/technologie";
import {Role} from "../../classes/role";
import {RoleService} from "../../services/role.service";
import {TechnologieService} from "../../services/technologie.service";
import {Certificat} from "../../classes/certificat";
import {Diplome} from "../../classes/diplome";
import {CertifiactService} from "../../services/certifiact.service";
import {DiplomeService} from "../../services/diplome.service";

@Component({
  selector: 'app-update-collaborateur-by-manager',
  templateUrl: './update-collaborateur-by-manager.component.html',
  styleUrls: ['./update-collaborateur-by-manager.component.css']
})
export class UpdateCollaborateurByManagerComponent implements OnInit {
  id!: number;
  collaborateur: Collaborateur;
  technologies: Technologie[];
  roles: Role[];
  diplomas: Diplome[];
  certificates: Certificat[];
  selectedRoles: Role[] = [];
  selectedTechnologies: Technologie[] = [];
  selectedCertificates: Certificat[] = [];
  constructor(private collaborateurService: CollaborateurService, private route: ActivatedRoute, private router: Router, private roleService: RoleService, private technologieService: TechnologieService,private certificatService :CertifiactService ,private diplomeService :DiplomeService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('matricule'));
    });
    this.collaborateurService.getCollaborateurByID(this.id).subscribe(
      data => {
        this.collaborateur = data;
        console.log("Collaborateur Récupérer ====>", data);
      },
      error => console.log(error)
    );
    this.getTechnologies();
    this.getRoles();
    this.getCertificates();
  }

  // Event handler for technologies change
  onTechnologiesChange() {
    console.log('Selected Technologies:', this.selectedTechnologies);
  }

// Event handler for roles change
  onRolesChange() {
    console.log('Selected Roles:', this.selectedRoles);
  }

  // Event handler for certificates change
  onCertificatesChange() {
    console.log('Selected Certificates:', this.selectedCertificates);
  }
  onSubmit() {
      this.collaborateur.roles = this.selectedRoles;
      this.collaborateur.technologies = this.selectedTechnologies;
      this.collaborateur.certificats = this.selectedCertificates;


    console.log("Technologies recup====>", this.collaborateur.technologies);
    console.log("Roles recup====>", this.collaborateur.roles);
    this.updateCollaborateur();
  }


  updateCollaborateur() {
    this.collaborateurService.updateCollaborateurByManager(this.collaborateur, this.id).subscribe(
      data => {
        console.log(data);
        this.gotoCollaborateurList();
      },
      error => console.log(error)
    );
  }

  gotoCollaborateurList() {
    this.router.navigate(['/dashboard/collaborateurs']);
  }

  getTechnologies() {
    this.technologieService.getAllTechnologies().subscribe(
      data => {
        this.technologies = data;
      },
      error => console.log(error)
    );
  }

  getRoles() {
    this.roleService.getAllRoles().subscribe(
      data => {
        this.roles = data;
      },
      error => console.log(error)
    );
  }
  getCertificates() {
    this.certificatService.getAllCertificats().subscribe(
      data => {
        this.certificates=data;
      },
      error => console.log(error)
    );
  }

}

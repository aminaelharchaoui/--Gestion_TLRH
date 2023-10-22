import { Routes } from '@angular/router';
import { GetAllManagersComponent } from './get-all-managers/get-all-managers.component';
import { GetNonManagersComponent } from './get-non-managers/get-non-managers.component';
import { CollabNonAffectedManagerComponent } from './collab-non-affected-manager/collab-non-affected-manager.component';
import { RatioComponent } from './Male-Female-ratio/ratio.component';
import { GetManagerWithoutAccComponent } from './get-manager-without-acc/get-manager-without-acc.component';
import { PourcentagesParEcoleComponent } from './pourcentages-par-ecole/pourcentages-par-ecole.component';
import { RecruitmentChartComponent } from './recruitment-chart/recruitment-chart.component';
import { GetAllCollaborateursComponent } from './get-all-collaborateurs/get-all-collaborateurs.component';
import { DiplomeRatioComponent } from './diplome-ratio/diplome-ratio.component';
import { SalaryEvolutionOfCollabComponent } from './salary-evolution-of-collab/salary-evolution-of-collab.component';
import { TauxTurnOverComponent } from './taux-turn-over/taux-turn-over.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SalaryEvoltionGraphComponent } from './salary-evoltion-graph/salary-evoltion-graph.component';
import {
  PostAppEvolutionTableNdGraphComponent
} from "./post-app-evolution-table-nd-graph/post-app-evolution-table-nd-graph.component";
import {
  UpdateCollaboratorByTreeactorsComponent
} from "./update-collaborator-by-treeactors/update-collaborator-by-treeactors.component";
import {CollaboratorsListComponent} from "./collaborators-list/collaborators-list.component";
import { AddCollabComponent } from './add-collab/add-collab.component';
import { CollabAffectedManagerComponent } from './collab-affected-manager/collab-affected-manager.component';
import {
  UpdateCollaborateurByManagerComponent
} from "./update-collaborateur-by-manager/update-collaborateur-by-manager.component";
import { GetNonAffectedCollabsComponent } from './get-non-affected-collabs/get-non-affected-collabs.component';
import { AffectCompteToCollabComponent } from './affect-compte-to-collab/affect-compte-to-collab.component';
import {
  GetManagersRhWithStatusActivatedComponent
} from "./get-managers-rh-with-status-activated/get-managers-rh-with-status-activated.component";
import {
  GetManagersRhWithStatusDesactivatedComponent
} from "./get-managers-rh-with-status-desactivated/get-managers-rh-with-status-desactivated.component";
import { CreateCompteComponent } from './create-compte/create-compte.component';
import {
  ImportOrExportCollaboratorsExcelComponent
} from "./import-or-export-collaborators-excel/import-or-export-collaborators-excel.component";
import { LoginComponent } from './login/login.component';
import { LoginForgottenComponent } from './loginForgotten/loginForgotten.component'


export const PagesRoutes: Routes = [
      { path: '', redirectTo: 'managers', pathMatch: 'full' },
      { path: 'managers', component: GetAllManagersComponent },
      { path: 'nonManagers', component: GetNonManagersComponent },
      {path: 'nonAffectedCollabs', component: CollabNonAffectedManagerComponent},
      { path: 'MaleFemaleRatio', component: RatioComponent },
      { path: 'ManagerWithoutAcc', component: GetManagerWithoutAccComponent },
      { path: 'VisualizeRatio', component: RatioComponent },
      { path: 'PourcentageEcole', component: PourcentagesParEcoleComponent },
      { path: 'recruitment', component: RecruitmentChartComponent },
      { path: 'collaborateurs', component: GetAllCollaborateursComponent },
      { path: 'diplomeRatio', component: DiplomeRatioComponent },
      { path: 'salaryEvolution/:id', component: SalaryEvolutionOfCollabComponent,},
      { path :'listofcollaboratorstoupdate',component:CollaboratorsListComponent},
      { path:'updateCollaboratorsBy3Actor/:id' ,component:UpdateCollaboratorByTreeactorsComponent},
      { path: 'TurnOver', component: TauxTurnOverComponent },
      { path: 'Technologies/:id', component: TechnologiesComponent },
      { path: 'salaryEvolution', component: SalaryEvoltionGraphComponent },
      { path : 'PostAppEvolution/:id' , component : PostAppEvolutionTableNdGraphComponent},
      { path : 'PostAppEvolution' , component : PostAppEvolutionTableNdGraphComponent},
      { path: 'diplomeRatio', component: DiplomeRatioComponent },
      { path: 'add', component: AddCollabComponent },
      {path: 'AffectedCollabs/:id', component: CollabAffectedManagerComponent,},
      {path: 'update-collaborateur/:matricule', component: UpdateCollaborateurByManagerComponent},
      {path: 'nonAffectedCollabs/:matricule', component: CollabNonAffectedManagerComponent},
      {path: 'GetnonAffectedCollabs', component: GetNonAffectedCollabsComponent},
      {path: 'AffectCompteToCollab', component: AffectCompteToCollabComponent},
      {path: 'update-collaborateur/:matricule', component: UpdateCollaborateurByManagerComponent},
      {path: 'ManagersRH/Activated', component: GetManagersRhWithStatusActivatedComponent},
      {path: 'ManagersRH/Desactivated', component: GetManagersRhWithStatusDesactivatedComponent},
      { path: 'CreateCompte', component: CreateCompteComponent },
      {path: 'Import_Export/Excel', component: ImportOrExportCollaboratorsExcelComponent},
      {path: 'Login', component: LoginComponent},
      {path: 'Forgotten', component: LoginForgottenComponent}
    
    


];


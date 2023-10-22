// -------------------- Components --------------------->
import { NgModule } from '@angular/core';
import { GetAllManagersComponent } from './get-all-managers/get-all-managers.component';
import { GetNonManagersComponent } from './get-non-managers/get-non-managers.component';
import { CollabNonAffectedManagerComponent } from './collab-non-affected-manager/collab-non-affected-manager.component';
import { GetManagerWithoutAccComponent } from './get-manager-without-acc/get-manager-without-acc.component';
import { PourcentagesParEcoleComponent } from './pourcentages-par-ecole/pourcentages-par-ecole.component';
import { RatioComponent } from './Male-Female-ratio/ratio.component';
import { RecruitmentChartComponent } from './recruitment-chart/recruitment-chart.component';
import { GetAllCollaborateursComponent } from './get-all-collaborateurs/get-all-collaborateurs.component';
import { SalaryEvolutionOfCollabComponent } from './salary-evolution-of-collab/salary-evolution-of-collab.component';
import { salaryPieComponent } from './salary-pie/salary-pie.component';
import { TauxTurnOverComponent } from './taux-turn-over/taux-turn-over.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import{DiplomeRatioComponent} from './diplome-ratio/diplome-ratio.component';
import {PostAppEvolutionTableNdGraphComponent} from "./post-app-evolution-table-nd-graph/post-app-evolution-table-nd-graph.component";
import {CollaboratorsListComponent} from "./collaborators-list/collaborators-list.component";
import {UpdateCollaboratorByTreeactorsComponent} from "./update-collaborator-by-treeactors/update-collaborator-by-treeactors.component";
import { AddCollabComponent } from './add-collab/add-collab.component';

// -------------------- Routing --------------------->
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';

// -------------------- Modules --------------------->
import { MaterialModule } from '../material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { UpdateCollaborateurByManagerComponent } from './update-collaborateur-by-manager/update-collaborateur-by-manager.component';
import {ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { CollabAffectedManagerComponent } from './collab-affected-manager/collab-affected-manager.component';

import {MatSelectModule} from "@angular/material/select";
import { GetNonAffectedCollabsComponent } from './get-non-affected-collabs/get-non-affected-collabs.component';
import { AffectCompteToCollabComponent } from './affect-compte-to-collab/affect-compte-to-collab.component';
import { GetManagersRhWithStatusActivatedComponent } from './get-managers-rh-with-status-activated/get-managers-rh-with-status-activated.component';
import {
  GetManagersRhWithStatusDesactivatedComponent
} from "./get-managers-rh-with-status-desactivated/get-managers-rh-with-status-desactivated.component";
import { CreateCompteComponent } from './create-compte/create-compte.component';
import { ImportOrExportCollaboratorsExcelComponent } from './import-or-export-collaborators-excel/import-or-export-collaborators-excel.component';
import { log } from 'console';
import { LoginComponent } from './login/login.component';
import { LoginForgottenComponent } from './loginForgotten/loginForgotten.component';


@NgModule({
  declarations: [
    GetAllManagersComponent,
    GetNonManagersComponent,
    CollaboratorsListComponent,
    UpdateCollaboratorByTreeactorsComponent,
    CollabNonAffectedManagerComponent,
    GetManagerWithoutAccComponent,
    PourcentagesParEcoleComponent,
    RatioComponent,
    RecruitmentChartComponent,
    GetAllCollaborateursComponent,
    SalaryEvolutionOfCollabComponent,
    PostAppEvolutionTableNdGraphComponent,
    salaryPieComponent,
    TauxTurnOverComponent,
    TechnologiesComponent,
    DiplomeRatioComponent,
    AddCollabComponent,
    CollabAffectedManagerComponent,
    UpdateCollaborateurByManagerComponent,
    AffectCompteToCollabComponent,
    GetNonAffectedCollabsComponent,
    GetManagersRhWithStatusActivatedComponent,
    GetManagersRhWithStatusDesactivatedComponent,
    CreateCompteComponent,
    ImportOrExportCollaboratorsExcelComponent,
    LoginComponent,
    LoginForgottenComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxChartsModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule.forChild(PagesRoutes),

  ],
  exports: [],
})
export class PagesModule {}

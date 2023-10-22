import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { DiplomeRatioComponent } from './Pages/diplome-ratio/diplome-ratio.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import {
  UpdateCollaborateurByManagerComponent
} from "./Pages/update-collaborateur-by-manager/update-collaborateur-by-manager.component";
import {GetAllCollaborateursComponent} from "./Pages/get-all-collaborateurs/get-all-collaborateurs.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard/managers', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./Pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }

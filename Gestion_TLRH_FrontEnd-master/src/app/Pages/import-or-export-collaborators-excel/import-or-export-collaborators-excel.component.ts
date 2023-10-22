import { Component } from '@angular/core';
import {CollaborateurService} from "../../services/collaborateur.service";

@Component({
  selector: 'app-import-or-export-collaborators-excel',
  templateUrl: './import-or-export-collaborators-excel.component.html',
  styleUrls: ['./import-or-export-collaborators-excel.component.css']
})
export class ImportOrExportCollaboratorsExcelComponent {
  selectedFile: File | null = null;
  message: string | null = null;

  constructor(private collaborateurService: CollaborateurService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  importCollaborators() {
    if (this.selectedFile) {
      this.collaborateurService.uploadCollaborateursExcel(this.selectedFile).subscribe(
        (response) => {
          console.log('Import successful', response);
          this.message = 'Import completed successfully!';
        },
        (error) => {
          console.error('Import error', error);
        }
      );
    }
  }

  exportCollaborators() {
    this.collaborateurService.exportCollaboratorsToExcelFile().subscribe(
      (response) => {
        // Créez un objet Blob à partir de la réponse pour le téléchargement du fichier
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        // Créez un URL object pour le téléchargement du fichier
        const url = window.URL.createObjectURL(blob);

        // Créez un élément d'ancrage pour le téléchargement
        const a = document.createElement('a');
        a.href = url;
        a.download = 'collaborateurs.xlsx'; // Nom du fichier à télécharger
        document.body.appendChild(a);

        // Déclenchez le téléchargement en cliquant sur l'élément d'ancrage
        a.click();

        // Libérez l'URL object
        window.URL.revokeObjectURL(url);
        this.message = 'Export completed successfully!';
      },
      (error) => {
        // Gérer les erreurs d'exportation
        console.error('Export error', error);
      }
    );
  }
}

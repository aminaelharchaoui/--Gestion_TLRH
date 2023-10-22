import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportOrExportCollaboratorsExcelComponent } from './import-or-export-collaborators-excel.component';

describe('ImportOrExportCollaboratorsExcelComponent', () => {
  let component: ImportOrExportCollaboratorsExcelComponent;
  let fixture: ComponentFixture<ImportOrExportCollaboratorsExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportOrExportCollaboratorsExcelComponent]
    });
    fixture = TestBed.createComponent(ImportOrExportCollaboratorsExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

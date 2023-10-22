import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCollaborateurByManagerComponent } from './update-collaborateur-by-manager.component';

describe('UpdateCollaborateurByManagerComponent', () => {
  let component: UpdateCollaborateurByManagerComponent;
  let fixture: ComponentFixture<UpdateCollaborateurByManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCollaborateurByManagerComponent]
    });
    fixture = TestBed.createComponent(UpdateCollaborateurByManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

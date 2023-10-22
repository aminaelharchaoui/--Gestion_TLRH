import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCollaboratorByTreeactorsComponent } from './update-collaborator-by-treeactors.component';

describe('UpdateCollaboratorByTreeactorsComponent', () => {
  let component: UpdateCollaboratorByTreeactorsComponent;
  let fixture: ComponentFixture<UpdateCollaboratorByTreeactorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCollaboratorByTreeactorsComponent]
    });
    fixture = TestBed.createComponent(UpdateCollaboratorByTreeactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

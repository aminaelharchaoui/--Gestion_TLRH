import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectCompteToCollabComponent } from './affect-compte-to-collab.component';

describe('AffectCompteToCollabComponent', () => {
  let component: AffectCompteToCollabComponent;
  let fixture: ComponentFixture<AffectCompteToCollabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffectCompteToCollabComponent]
    });
    fixture = TestBed.createComponent(AffectCompteToCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

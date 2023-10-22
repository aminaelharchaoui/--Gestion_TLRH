import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCollaborateursComponent } from './get-all-collaborateurs.component';

describe('GetAllCollaborateursComponent', () => {
  let component: GetAllCollaborateursComponent;
  let fixture: ComponentFixture<GetAllCollaborateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllCollaborateursComponent]
    });
    fixture = TestBed.createComponent(GetAllCollaborateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

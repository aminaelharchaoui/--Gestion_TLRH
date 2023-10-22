import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNonAffectedCollabsComponent } from './get-non-affected-collabs.component';

describe('GetNonAffectedCollabsComponent', () => {
  let component: GetNonAffectedCollabsComponent;
  let fixture: ComponentFixture<GetNonAffectedCollabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetNonAffectedCollabsComponent]
    });
    fixture = TestBed.createComponent(GetNonAffectedCollabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

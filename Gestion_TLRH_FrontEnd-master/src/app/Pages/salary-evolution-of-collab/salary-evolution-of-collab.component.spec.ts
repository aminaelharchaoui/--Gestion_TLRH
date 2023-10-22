import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryEvolutionOfCollabComponent } from './salary-evolution-of-collab.component';

describe('SalaryEvolutionOfCollabComponent', () => {
  let component: SalaryEvolutionOfCollabComponent;
  let fixture: ComponentFixture<SalaryEvolutionOfCollabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryEvolutionOfCollabComponent]
    });
    fixture = TestBed.createComponent(SalaryEvolutionOfCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

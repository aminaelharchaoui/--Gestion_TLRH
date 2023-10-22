import { ComponentFixture, TestBed } from '@angular/core/testing';

import { salaryPieComponent } from './salary-pie.component';

describe('salaryPieComponent', () => {
  let component: salaryPieComponent;
  let fixture: ComponentFixture<salaryPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [salaryPieComponent]
    });
    fixture = TestBed.createComponent(salaryPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

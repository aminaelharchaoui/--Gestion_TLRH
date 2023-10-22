import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentChartComponent } from './recruitment-chart.component';

describe('RecruitmentChartComponent', () => {
  let component: RecruitmentChartComponent;
  let fixture: ComponentFixture<RecruitmentChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitmentChartComponent]
    });
    fixture = TestBed.createComponent(RecruitmentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

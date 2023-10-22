/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SalaryEvoltionGraphComponent } from './salary-evoltion-graph.component';

describe('SalaryEvoltionGraphComponent', () => {
  let component: SalaryEvoltionGraphComponent;
  let fixture: ComponentFixture<SalaryEvoltionGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryEvoltionGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryEvoltionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

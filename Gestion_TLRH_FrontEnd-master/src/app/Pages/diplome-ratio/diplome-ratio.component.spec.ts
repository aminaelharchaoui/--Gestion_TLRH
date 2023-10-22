/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiplomeRatioComponent } from './diplome-ratio.component';

describe('DiplomeRatioComponent', () => {
  let component: DiplomeRatioComponent;
  let fixture: ComponentFixture<DiplomeRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomeRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomeRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

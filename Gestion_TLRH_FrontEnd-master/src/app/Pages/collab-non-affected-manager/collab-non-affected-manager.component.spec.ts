/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CollabNonAffectedManagerComponent } from './collab-non-affected-manager.component';

describe('CollabNonAffectedManagerComponent', () => {
  let component: CollabNonAffectedManagerComponent;
  let fixture: ComponentFixture<CollabNonAffectedManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabNonAffectedManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabNonAffectedManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

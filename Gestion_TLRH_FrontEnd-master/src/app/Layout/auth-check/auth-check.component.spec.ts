/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AuthCheckComponent } from './auth-check.component';

describe('AuthCheckComponent', () => {
  let component: AuthCheckComponent;
  let fixture: ComponentFixture<AuthCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

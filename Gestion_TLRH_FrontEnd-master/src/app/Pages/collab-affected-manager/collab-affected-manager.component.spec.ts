import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabAffectedManagerComponent } from './collab-affected-manager.component';

describe('CollabAffectedManagerComponent', () => {
  let component: CollabAffectedManagerComponent;
  let fixture: ComponentFixture<CollabAffectedManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollabAffectedManagerComponent]
    });
    fixture = TestBed.createComponent(CollabAffectedManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNonManagersComponent } from './get-non-managers.component';

describe('GetNonManagersComponent', () => {
  let component: GetNonManagersComponent;
  let fixture: ComponentFixture<GetNonManagersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetNonManagersComponent]
    });
    fixture = TestBed.createComponent(GetNonManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

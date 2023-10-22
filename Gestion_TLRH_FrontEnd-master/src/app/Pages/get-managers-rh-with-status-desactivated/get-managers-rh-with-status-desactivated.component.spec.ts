import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetManagersRhWithStatusDesactivatedComponent } from './get-managers-rh-with-status-desactivated.component';

describe('GetManagersRhWithStatusDesactivatedComponent', () => {
  let component: GetManagersRhWithStatusDesactivatedComponent;
  let fixture: ComponentFixture<GetManagersRhWithStatusDesactivatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetManagersRhWithStatusDesactivatedComponent]
    });
    fixture = TestBed.createComponent(GetManagersRhWithStatusDesactivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

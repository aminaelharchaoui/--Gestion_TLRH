import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetManagerWithoutAccComponent } from './get-manager-without-acc.component';

describe('GetManagerWithoutAccComponent', () => {
  let component: GetManagerWithoutAccComponent;
  let fixture: ComponentFixture<GetManagerWithoutAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetManagerWithoutAccComponent]
    });
    fixture = TestBed.createComponent(GetManagerWithoutAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

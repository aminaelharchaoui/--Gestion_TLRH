import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAppEvolutionTableNdGraphComponent } from './post-app-evolution-table-nd-graph.component';

describe('PostAppEvolutionTableNdGraphComponent', () => {
  let component: PostAppEvolutionTableNdGraphComponent;
  let fixture: ComponentFixture<PostAppEvolutionTableNdGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAppEvolutionTableNdGraphComponent]
    });
    fixture = TestBed.createComponent(PostAppEvolutionTableNdGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailModalContentComponent } from './recipe-detail-modal-content.component';

describe('RecipeDetailModalContentComponent', () => {
  let component: RecipeDetailModalContentComponent;
  let fixture: ComponentFixture<RecipeDetailModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

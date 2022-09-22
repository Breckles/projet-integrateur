import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesArticleCardComponent } from './recipes-article-card.component';

describe('RecipesArticleCardComponent', () => {
  let component: RecipesArticleCardComponent;
  let fixture: ComponentFixture<RecipesArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesArticleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

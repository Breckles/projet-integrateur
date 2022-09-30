import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeToMenuModalContentComponent } from './add-recipe-to-menu-modal-content.component';

describe('AddRecipeToMenuModalContentComponent', () => {
  let component: AddRecipeToMenuModalContentComponent;
  let fixture: ComponentFixture<AddRecipeToMenuModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecipeToMenuModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecipeToMenuModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

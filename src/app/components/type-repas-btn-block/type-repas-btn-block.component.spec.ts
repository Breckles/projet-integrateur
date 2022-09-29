import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRepasBtnBlockComponent } from './type-repas-btn-block.component';

describe('TypeRepasBtnBlockComponent', () => {
  let component: TypeRepasBtnBlockComponent;
  let fixture: ComponentFixture<TypeRepasBtnBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRepasBtnBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeRepasBtnBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

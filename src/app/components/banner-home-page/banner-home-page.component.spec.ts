import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHomePageComponent } from './banner-home-page.component';

describe('BannerHomePageComponent', () => {
  let component: BannerHomePageComponent;
  let fixture: ComponentFixture<BannerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

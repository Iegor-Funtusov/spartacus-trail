import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleImageNavBarBannerComponent } from './simple-image-nav-bar-banner.component';

describe('SimpleImageNavBarBannerComponent', () => {
  let component: SimpleImageNavBarBannerComponent;
  let fixture: ComponentFixture<SimpleImageNavBarBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleImageNavBarBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleImageNavBarBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

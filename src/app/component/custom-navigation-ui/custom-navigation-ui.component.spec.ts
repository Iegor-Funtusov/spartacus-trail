import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNavigationUiComponent } from './custom-navigation-ui.component';

describe('CustomNavigationUiComponent', () => {
  let component: CustomNavigationUiComponent;
  let fixture: ComponentFixture<CustomNavigationUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNavigationUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNavigationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

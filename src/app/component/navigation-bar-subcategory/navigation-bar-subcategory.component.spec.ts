import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarSubcategoryComponent } from './navigation-bar-subcategory.component';

describe('NavigationBarSubcategoryComponent', () => {
  let component: NavigationBarSubcategoryComponent;
  let fixture: ComponentFixture<NavigationBarSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationBarSubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

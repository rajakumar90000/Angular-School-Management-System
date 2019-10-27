import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassLevelCategoriesComponent } from './view-class-level-categories.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ViewClassLevelCategoriesComponent', () => {
  let component: ViewClassLevelCategoriesComponent;
  let fixture: ComponentFixture<ViewClassLevelCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomMaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [ ViewClassLevelCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassLevelCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

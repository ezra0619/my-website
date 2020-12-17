import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageProjectsComponent } from './mainpage-projects.component';

describe('MainpageProjectsComponent', () => {
  let component: MainpageProjectsComponent;
  let fixture: ComponentFixture<MainpageProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpageProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

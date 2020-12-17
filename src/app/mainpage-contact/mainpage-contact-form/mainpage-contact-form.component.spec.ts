import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageContactFormComponent } from './mainpage-contact-form.component';

describe('MainpageContactFormComponent', () => {
  let component: MainpageContactFormComponent;
  let fixture: ComponentFixture<MainpageContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpageContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

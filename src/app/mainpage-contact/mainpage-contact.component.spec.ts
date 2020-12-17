import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageContactComponent } from './mainpage-contact.component';

describe('MainpageContactComponent', () => {
  let component: MainpageContactComponent;
  let fixture: ComponentFixture<MainpageContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpageContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

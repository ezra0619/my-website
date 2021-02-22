import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCountryComponent } from './individual-country.component';

describe('IndividualCountryComponent', () => {
  let component: IndividualCountryComponent;
  let fixture: ComponentFixture<IndividualCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesMainGridComponent } from './countries-main-grid.component';

describe('CountriesMainGridComponent', () => {
  let component: CountriesMainGridComponent;
  let fixture: ComponentFixture<CountriesMainGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesMainGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesMainGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

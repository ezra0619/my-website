import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChSixteenRESTCountriesApiColorThemeSwitcherComponent } from './ch-sixteen-rest-countries-api-color-theme-switcher.component';

describe('ChSixteenRESTCountriesApiColorThemeSwitcherComponent', () => {
  let component: ChSixteenRESTCountriesApiColorThemeSwitcherComponent;
  let fixture: ComponentFixture<ChSixteenRESTCountriesApiColorThemeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChSixteenRESTCountriesApiColorThemeSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChSixteenRESTCountriesApiColorThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

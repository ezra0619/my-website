import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChFourSinglePriceGridComponent } from './ch-four-single-price-grid.component';

describe('ChFourSinglePriceGridComponent', () => {
  let component: ChFourSinglePriceGridComponent;
  let fixture: ComponentFixture<ChFourSinglePriceGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChFourSinglePriceGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChFourSinglePriceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

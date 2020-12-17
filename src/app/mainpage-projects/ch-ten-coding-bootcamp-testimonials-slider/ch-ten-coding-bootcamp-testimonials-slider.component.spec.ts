import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChTenCodingBootcampTestimonialsSliderComponent } from './ch-ten-coding-bootcamp-testimonials-slider.component';

describe('ChTenCodingBootcampTestimonialsSliderComponent', () => {
  let component: ChTenCodingBootcampTestimonialsSliderComponent;
  let fixture: ComponentFixture<ChTenCodingBootcampTestimonialsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChTenCodingBootcampTestimonialsSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChTenCodingBootcampTestimonialsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

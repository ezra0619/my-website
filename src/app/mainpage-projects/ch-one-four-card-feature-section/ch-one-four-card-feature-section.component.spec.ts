import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChOneFourCardFeatureSectionComponent } from './ch-one-four-card-feature-section.component';

describe('ChOneFourCardFeatureSectionComponent', () => {
  let component: ChOneFourCardFeatureSectionComponent;
  let fixture: ComponentFixture<ChOneFourCardFeatureSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChOneFourCardFeatureSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChOneFourCardFeatureSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

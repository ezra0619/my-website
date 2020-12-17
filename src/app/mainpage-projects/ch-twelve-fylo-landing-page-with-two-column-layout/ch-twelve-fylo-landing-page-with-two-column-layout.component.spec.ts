import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChTwelveFyloLandingPageWithTwoColumnLayoutComponent } from './ch-twelve-fylo-landing-page-with-two-column-layout.component';

describe('ChTwelveFyloLandingPageWithTwoColumnLayoutComponent', () => {
  let component: ChTwelveFyloLandingPageWithTwoColumnLayoutComponent;
  let fixture: ComponentFixture<ChTwelveFyloLandingPageWithTwoColumnLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChTwelveFyloLandingPageWithTwoColumnLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChTwelveFyloLandingPageWithTwoColumnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

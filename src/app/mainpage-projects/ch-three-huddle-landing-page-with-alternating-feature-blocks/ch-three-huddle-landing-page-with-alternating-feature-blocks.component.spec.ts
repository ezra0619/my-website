import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChThreeHuddleLandingPageWithAlternatingFeatureBlocksComponent } from './ch-three-huddle-landing-page-with-alternating-feature-blocks.component';

describe('ChThreeHuddleLandingPageWithAlternatingFeatureBlocksComponent', () => {
  let component: ChThreeHuddleLandingPageWithAlternatingFeatureBlocksComponent;
  let fixture: ComponentFixture<ChThreeHuddleLandingPageWithAlternatingFeatureBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChThreeHuddleLandingPageWithAlternatingFeatureBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChThreeHuddleLandingPageWithAlternatingFeatureBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

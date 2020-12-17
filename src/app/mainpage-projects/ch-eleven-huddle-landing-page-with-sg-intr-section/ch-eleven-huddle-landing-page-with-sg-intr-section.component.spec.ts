import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChElevenHuddleLandingPageWithSgIntrSectionComponent } from './ch-eleven-huddle-landing-page-with-sg-intr-section.component';

describe('ChElevenHuddleLandingPageWithSgIntrSectionComponent', () => {
  let component: ChElevenHuddleLandingPageWithSgIntrSectionComponent;
  let fixture: ComponentFixture<ChElevenHuddleLandingPageWithSgIntrSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChElevenHuddleLandingPageWithSgIntrSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChElevenHuddleLandingPageWithSgIntrSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

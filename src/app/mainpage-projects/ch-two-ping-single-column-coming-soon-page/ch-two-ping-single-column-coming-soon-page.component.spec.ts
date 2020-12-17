import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChTwoPingSingleColumnComingSoonPageComponent } from './ch-two-ping-single-column-coming-soon-page.component';

describe('ChTwoPingSingleColumnComingSoonPageComponent', () => {
  let component: ChTwoPingSingleColumnComingSoonPageComponent;
  let fixture: ComponentFixture<ChTwoPingSingleColumnComingSoonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChTwoPingSingleColumnComingSoonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChTwoPingSingleColumnComingSoonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

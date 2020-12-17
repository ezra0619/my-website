import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChFiveBaseApparelComingSoonComponent } from './ch-five-base-apparel-coming-soon.component';

describe('ChFiveBaseApparelComingSoonComponent', () => {
  let component: ChFiveBaseApparelComingSoonComponent;
  let fixture: ComponentFixture<ChFiveBaseApparelComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChFiveBaseApparelComingSoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChFiveBaseApparelComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

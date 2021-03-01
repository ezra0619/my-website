import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChSeventeenRockPaperScissorsLizardSpockGameComponent } from './ch-seventeen-rock-paper-scissors-lizard-spock-game.component';

describe('ChSeventeenRockPaperScissorsLizardSpockGameComponent', () => {
  let component: ChSeventeenRockPaperScissorsLizardSpockGameComponent;
  let fixture: ComponentFixture<ChSeventeenRockPaperScissorsLizardSpockGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChSeventeenRockPaperScissorsLizardSpockGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChSeventeenRockPaperScissorsLizardSpockGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChFifteenYoutubeOnRepeatComponent } from './ch-fifteen-youtube-on-repeat.component';

describe('ChFifteenYoutubeOnRepeatComponent', () => {
  let component: ChFifteenYoutubeOnRepeatComponent;
  let fixture: ComponentFixture<ChFifteenYoutubeOnRepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChFifteenYoutubeOnRepeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChFifteenYoutubeOnRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChSixIntroComponentWithSignUpFormComponent } from './ch-six-intro-component-with-sign-up-form.component';

describe('ChSixIntroComponentWithSignUpFormComponent', () => {
  let component: ChSixIntroComponentWithSignUpFormComponent;
  let fixture: ComponentFixture<ChSixIntroComponentWithSignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChSixIntroComponentWithSignUpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChSixIntroComponentWithSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

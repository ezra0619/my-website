import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChThirteenStaticJobListingsMasterComponent } from './ch-thirteen-static-job-listings-master.component';

describe('ChThirteenStaticJobListingsMasterComponent', () => {
  let component: ChThirteenStaticJobListingsMasterComponent;
  let fixture: ComponentFixture<ChThirteenStaticJobListingsMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChThirteenStaticJobListingsMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChThirteenStaticJobListingsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

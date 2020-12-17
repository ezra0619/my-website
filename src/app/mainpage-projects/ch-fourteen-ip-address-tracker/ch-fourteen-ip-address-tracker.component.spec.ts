import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChFourteenIPAddressTrackerComponent } from './ch-fourteen-ip-address-tracker.component';

describe('ChFourteenIPAddressTrackerComponent', () => {
  let component: ChFourteenIPAddressTrackerComponent;
  let fixture: ComponentFixture<ChFourteenIPAddressTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChFourteenIPAddressTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChFourteenIPAddressTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

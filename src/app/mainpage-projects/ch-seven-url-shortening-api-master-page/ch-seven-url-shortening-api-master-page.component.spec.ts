import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChSevenUrlShorteningApiMasterPageComponent } from './ch-seven-url-shortening-api-master-page.component';

describe('ChSevenUrlShorteningApiMasterPageComponent', () => {
  let component: ChSevenUrlShorteningApiMasterPageComponent;
  let fixture: ComponentFixture<ChSevenUrlShorteningApiMasterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChSevenUrlShorteningApiMasterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChSevenUrlShorteningApiMasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChEightFyloDataStorageComponentComponent } from './ch-eight-fylo-data-storage-component.component';

describe('ChEightFyloDataStorageComponentComponent', () => {
  let component: ChEightFyloDataStorageComponentComponent;
  let fixture: ComponentFixture<ChEightFyloDataStorageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChEightFyloDataStorageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChEightFyloDataStorageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

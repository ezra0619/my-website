import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChNineArticlePreviewComponentComponent } from './ch-nine-article-preview-component.component';

describe('ChNineArticlePreviewComponentComponent', () => {
  let component: ChNineArticlePreviewComponentComponent;
  let fixture: ComponentFixture<ChNineArticlePreviewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChNineArticlePreviewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChNineArticlePreviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNewTemplateComponent } from './article-new-template.component';

describe('ArticleNewTemplateComponent', () => {
  let component: ArticleNewTemplateComponent;
  let fixture: ComponentFixture<ArticleNewTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleNewTemplateComponent]
    });
    fixture = TestBed.createComponent(ArticleNewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

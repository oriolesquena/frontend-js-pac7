import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleDetailComponent {
  public article!: Article;

  constructor() { }
}

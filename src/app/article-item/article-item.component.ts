import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, Pipe, PipeTransform } from '@angular/core';
import { Article } from 'src/app/model/article'
import { ArticleQuantityChange } from 'src/app/model/article-quantity-change';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArticleItemComponent {
  @Input() public article!: Article;
  @Output() private quantityChange: EventEmitter<ArticleQuantityChange> = new EventEmitter();

  constructor() { }

  incrementInCart() {
    this.quantityChange.emit({article: this.article, changeInQuantity: 1});
  }

  decrementInCart() {
    if (this.article.quantityInCart > 0) {
      this.quantityChange.emit({article: this.article, changeInQuantity: -1});
    }
  }
}
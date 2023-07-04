import {Component, OnInit} from '@angular/core';
import {Article} from '../model/article';
import {ArticleQuantityChange} from 'src/app/model/article-quantity-change';

import { ArticleService } from '../services/article-service';

import { Observable } from 'rxjs'
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { merge } from 'rxjs/operators';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})

export class ArticleListComponent implements OnInit {
  public articles$!: Observable<Article[]>;
  public searchTerm: string = '';

  private searchSubject: Subject<string> = new Subject();
  private reloadArticlesList
  : Subject<void> = new Subject();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles$ = this.searchSubject
        .pipe(startWith(this.searchTerm)
        ,debounceTime(300)
        ,distinctUntilChanged()
        ,merge(this.reloadArticlesList)
        ,switchMap((query: any) => this.articleService.getArticles(this.searchTerm)));
  }

  search() {
    this.searchSubject.next(this.searchTerm);
  }

  onQuantityChange(change: ArticleQuantityChange) {
    this.articleService.changeQuantity(change.article.id, change.changeInQuantity)
        .subscribe((res) => this.reloadArticlesList
        .next());
  }

  onCreate() {
    this.reloadArticlesList.next();
  }
}

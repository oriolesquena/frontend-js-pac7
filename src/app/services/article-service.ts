import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Article } from '../model/article';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient, private userStore: UserStoreService) {}

  getArticles(query: string): Observable<Article[]> {
    return this.httpClient.get<Article[]>('/api/articles', {
      params: {q: query}
    });
  }

  getArticle(code: string): Observable<Article> {
    return this.httpClient.get<Article>('/api/stock/' + code);
  }

  changeQuantity(id: number, changeInQuantity: number): Observable<any> {
    return this.httpClient.patch('/api/articles/' + id, {changeInQuantity: changeInQuantity});
  }

  createArticle(article: Article): Observable<any> {
    return this.httpClient.post<Article>('/api/articles', article);
  }
}

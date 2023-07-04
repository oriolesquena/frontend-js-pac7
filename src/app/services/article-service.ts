import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../model/article';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) {}

  getArticles(query: string): Observable<Article[]> {
    return this.httpClient.get<Article[]>('/api/articles', {
      params: {q: query}
    });
  }

  changeQuantity(id: number, changeInQuantity: number): Observable<any> {
    return this.httpClient.patch('/api/articles/' + id, {changeInQuantity: changeInQuantity});
  }

  createArticle(article: Article): Observable<any> {
    return this.httpClient.post<Article>('/api/articles', article);
  }
}

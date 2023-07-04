import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Article } from '../model/article';
import { Observable } from 'rxjs';
import { ArticleService } from '../services/article-service';

@Injectable()
export class ArticleLoadResolverService  implements Resolve<Article> {

  constructor(private articleService: ArticleService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot):
            Article | Observable<Article> | Promise<Article> {
    const articleCode = route.paramMap.get('code');
    return this.articleService.getArticle(articleCode!);
  }
}
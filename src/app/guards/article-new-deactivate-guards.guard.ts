
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,
         CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleNewReactiveComponent } from '../article/article-new-reactive/article-new-reactive.component';

@Injectable()
export class CreateArticleDeactivateGuard
    implements CanDeactivate<ArticleNewReactiveComponent> {
  canDeactivate(component: ArticleNewReactiveComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return window.confirm('Do you want to navigate away from this page?');
  }
}
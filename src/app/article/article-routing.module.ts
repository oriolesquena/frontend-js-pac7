import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AuthGuard } from '../guards/auth.guard';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CreateArticleDeactivateGuard } from '../guards/article-new-deactivate-guards.guard';
import { ArticleLoadResolverService } from '../guards/article-load-resolver.service';

const routes: Routes = [
  { path: 'list', component: ArticleListComponent,
    canActivate: [AuthGuard] },
  { path: 'create', component: ArticleNewReactiveComponent,
    canActivate: [AuthGuard] },
  { path: ':code', component: ArticleDetailComponent,
    canActivate: [AuthGuard], resolve: { article: ArticleLoadResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
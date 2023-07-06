import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


import { ArticleRoutingModule } from './article-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultPipe } from '../default.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticleRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ArticleDetailComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    DefaultPipe,
  ]
})
export class ArticleModule { }
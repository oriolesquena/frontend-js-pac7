import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleService } from './services/article-service';
import { DefaultPipe } from './default.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const rutas: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'article-new-template', component: ArticleNewTemplateComponent },
  { path: 'article-new-reactive', component: ArticleNewReactiveComponent }
];

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent,
    DefaultPipe,
    LoginComponent,
    RegisterComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

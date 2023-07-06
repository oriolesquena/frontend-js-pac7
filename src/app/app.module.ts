import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleService } from './services/article-service';
import { DefaultPipe } from './default.pipe';
import { UserStoreService } from './services/user-store.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { ArticleAppInterceptor } from './services/article-app.interceptor';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    DefaultPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutesModule,
  ],
  providers: [
    ArticleService,
    UserStoreService,
    UserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ArticleAppInterceptor,
      multi: true,
    }
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

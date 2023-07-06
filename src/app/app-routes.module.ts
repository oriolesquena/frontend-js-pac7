import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const rutas: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  { path: 'article', loadChildren: () => import('./article/article.module').then(x => x.ArticleModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(x => x.UserModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rutas),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AppRoutesModule { }

import { Component } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {

  public message = '';
  public messageSuccessful = '';
  constructor() { }

  createArticle(articleForm: { invalid: any; value: { article: Article; }; }) {
    if (articleForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      this.messageSuccessful = 'Article correctly created!';
      const article: Article = articleForm.value.article;
      console.log('Creating article', article);
    }
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from '../../services/article-service';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})

export class ArticleNewReactiveComponent {

  @Output() private articleCreated: EventEmitter<void> = new EventEmitter();

  public message = '';
  public messageSuccessful = '';

  public articleForm!: FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required, NameArticleValidator(/\b(?:prueba|test|mock|fake)\b/gi)]],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ['', [Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]],
      isOnSale: false
    });
  }

  createArticle() {
    if (this.articleForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const article: Article = this.articleForm.value;
      this.articleService.createArticle(article).subscribe((res) => {
        this.messageSuccessful = 'Article correctly created!';
        console.log('Triggered event emitter');
        this.articleCreated.next();
      }, (err) => {
        this.message = 'Unable to create product, please try again.';
      });
    }
  }

  get name() { return this.articleForm.get('name'); }

  get price() { return this.articleForm.get('price'); }

  get imageUrl() { return this.articleForm.get('imageUrl'); }
}

export function NameArticleValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

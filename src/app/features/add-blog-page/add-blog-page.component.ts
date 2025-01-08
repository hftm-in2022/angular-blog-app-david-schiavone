import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BlogHeaderComponent } from '../../blog-header/blog-header.component';

@Component({
  selector: 'app-add-blog-page',
  imports: [BlogHeaderComponent, ReactiveFormsModule],
  templateUrl: './add-blog-page.component.html',
  styleUrl: './add-blog-page.component.scss',
})
export class AddBlogPageComponent {
  blogForm: FormGroup;
  readonly titleMinLength = 3;
  readonly titleMaxLength = 20;
  readonly contentMinLength = 5;
  readonly contentMaxLength = 5000;

  constructor(private formBuilder: FormBuilder) {
    this.blogForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(this.titleMinLength),
          Validators.maxLength(this.titleMaxLength),
        ],
      ],
      content: [
        '',
        [
          Validators.required,
          Validators.minLength(this.contentMinLength),
          Validators.maxLength(this.contentMaxLength),
        ],
      ],
    });
  }
}

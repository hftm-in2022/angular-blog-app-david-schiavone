import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BlogHeaderComponent } from '../../blog-header/blog-header.component';
import { BlogService } from '../../services/blog.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-blog-page',
  imports: [BlogHeaderComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './add-blog-page.component.html',
  styleUrl: './add-blog-page.component.scss',
})
export class AddBlogPageComponent {
  blogForm: FormGroup;
  readonly titleMinLength = 3;
  readonly titleMaxLength = 20;
  readonly contentMinLength = 5;
  readonly contentMaxLength = 5000;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private oidcService: OidcSecurityService,
  ) {
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

  submit() {
    this.oidcService.getAccessToken().subscribe((token) => {
      this.blogService.addBlog(this.blogForm.value, token).subscribe();
    });
  }

  reset() {
    this.blogForm.get('title')?.setValue('');
    this.blogForm.get('content')?.setValue('');
  }
}

import { Component, WritableSignal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BlogHeaderComponent } from '../../blog-header/blog-header.component';
import { BlogService } from '../../services/blog.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { AppState } from '../../services/redux/app-state';
import { StateService } from '../../services/redux/state.service';

@Component({
  selector: 'app-add-blog-page',
  imports: [
    BlogHeaderComponent,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    MatProgressSpinner,
  ],
  templateUrl: './add-blog-page.component.html',
  styleUrl: './add-blog-page.component.scss',
})
export class AddBlogPageComponent {
  readonly titleMinLength = 3;
  readonly titleMaxLength = 20;
  readonly contentMinLength = 5;
  readonly contentMaxLength = 5000;

  state: WritableSignal<AppState>;
  blogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private oidcService: OidcSecurityService,
    private stateService: StateService,
    private router: Router,
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

    this.state = this.stateService.getState();
  }

  submit() {
    this.stateService.dispatch({ type: 'SET_LOADING', payload: true });

    this.oidcService.getAccessToken().subscribe((token) => {
      this.blogService.addBlog(this.blogForm.value, token).subscribe(() => {
        this.stateService.dispatch({ type: 'SET_LOADING', payload: true });
        this.router.navigate(['/']);
      });
    });
  }

  reset() {
    this.blogForm.get('title')?.setValue('');
    this.blogForm.get('content')?.setValue('');
  }
}

import { Routes } from '@angular/router';
import { blogResolver } from './core/resolver/blog-detail-resolver';
import { blogsResolver } from './core/resolver/blog-overview-resolver';
import { isAuthenticatedGuard } from './core/guards/is-authenticated-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/blog-overview/blog-overview.component').then(
        (m) => m.BlogOverviewComponent,
      ),
    resolve: {
      blogs: blogsResolver,
    },
  },
  {
    path: 'blogs/:blogId',
    loadComponent: () =>
      import('./features/blog-detail/blog-detail.component').then(
        (m) => m.BlogDetailComponent,
      ),
    resolve: {
      blog: blogResolver,
    },
  },
  {
    path: 'add-blog',
    loadComponent: () =>
      import('./features/add-blog-page/add-blog-page.component').then(
        (m) => m.AddBlogPageComponent,
      ),
    canActivate: [isAuthenticatedGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent,
      ),
  },
];

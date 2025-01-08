import { Routes } from '@angular/router';
import { blogResolver } from './resolver/blog-detail-resolver';
import { blogsResolver } from './resolver/blog-overview-resolver';
import { isAuthenticatedGuard } from './guards/is-authenticated-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./blog-overview/blog-overview.component').then(
        (m) => m.BlogOverviewComponent,
      ),
    resolve: {
      blogs: blogsResolver,
    },
  },
  {
    path: 'blogs/:blogId',
    loadComponent: () =>
      import('./blog-detail/blog-detail.component').then(
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
];

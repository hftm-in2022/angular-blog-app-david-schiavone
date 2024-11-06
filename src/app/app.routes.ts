import { Routes } from '@angular/router';
import { blogResolver } from './resolver/blog-detail-resolver';
import { blogsResolver } from './resolver/blog-overview-resolver';

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
];

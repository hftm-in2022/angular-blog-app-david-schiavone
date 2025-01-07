import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../model/blog';
import { StateService } from '../services/redux/state.service';
import { tap } from 'rxjs';

export const blogResolver: ResolveFn<Blog> = (route) => {
  const blogService = inject(BlogService);
  const stateService = inject(StateService);

  stateService.dispatch({ type: 'SET_LOADING', payload: true });

  return blogService.loadBlog(route.params['blogId']).pipe(
    tap((data) => {
      stateService.dispatch({ type: 'BLOG_DETAIL_LOADED', payload: data });
      stateService.dispatch({ type: 'SET_LOADING', payload: false });
    }),
  );
};

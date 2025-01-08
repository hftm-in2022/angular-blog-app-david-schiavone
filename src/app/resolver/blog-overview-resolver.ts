import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blogs } from '../model/blogs';
import { StateService } from '../services/redux/state.service';
import { tap } from 'rxjs';

export const blogsResolver: ResolveFn<Blogs> = () => {
  const blogService = inject(BlogService);
  const stateService = inject(StateService);

  stateService.dispatch({ type: 'SET_LOADING', payload: true });

  return blogService.loadBlogs().pipe(
    tap((data) => {
      stateService.dispatch({ type: 'BLOGS_LOADED', payload: data });
      stateService.dispatch({ type: 'SET_LOADING', payload: false });
    }),
  );
};

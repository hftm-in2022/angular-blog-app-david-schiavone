import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../model/blog';

export const blogResolver: ResolveFn<Blog> = (route) => {
  const blogService = inject(BlogService);
  return blogService.loadBlog(route.params['blogId']);
};

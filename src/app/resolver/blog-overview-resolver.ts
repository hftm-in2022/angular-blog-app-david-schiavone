import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blogs } from '../model/blogs';

export const blogsResolver: ResolveFn<Blogs> = () => {
  const blogService = inject(BlogService);
  return blogService.loadBlogs();
};

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../model/blogs';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  loadBlogs(): Observable<Blogs> {
    return this.http.get<Blogs>(
      'https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io/entries',
    );
  }

  loadBlog(blogId: number) {
    return this.http.get<Blog>(
      `https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io/entries/${blogId}`,
    );
  }
}

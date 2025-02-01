import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../model/blogs';
import { Blog } from '../model/blog';
import { AddBlog } from '../model/add-blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  private readonly apiUrl =
    'https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io'; // besser mit environments arbeiten

  loadBlogs(): Observable<Blogs> {
    return this.http.get<Blogs>(`${this.apiUrl}/entries`); // validierung fehlt
  }

  loadBlog(blogId: number) {
    return this.http.get<Blog>(`${this.apiUrl}/entries/${blogId}`);
  }

  addBlog(blog: AddBlog, oidcToken: string): Observable<Blog> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${oidcToken}`, // kann mittels secureRoutes und authInterceptor gelöst werden
    });
    return this.http.post<Blog>(`${this.apiUrl}/entries`, blog, {
      headers: headers,
    });
  }
}

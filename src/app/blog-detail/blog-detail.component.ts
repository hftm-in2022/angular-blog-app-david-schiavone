import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Blog } from '../model/blog';
import { BlogService } from '../services/blog.service';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  blog?: Blog = undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) {}

  ngOnInit(): void {
    this.blogService
      .loadBlog(this.route.snapshot.params['blogId'])
      .subscribe((blog) => {
        this.blog = blog;
      });
  }

  getComments(): Comment[] {
    if (this.blog?.comments instanceof Array) {
      return this.blog?.comments;
    }

    return [];
  }
}

import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { Blogs } from '../model/blogs';

@Component({
  selector: 'app-blog-overview',
  standalone: true,
  imports: [AsyncPipe, BlogCardComponent, NgIf],
  templateUrl: './blog-overview.component.html',
  styleUrl: './blog-overview.component.scss',
})
export class BlogOverviewComponent implements OnInit {
  blogs?: Blogs = undefined;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.loadBlogs().subscribe((blogs) => {
      this.blogs = blogs;
    });
  }
}

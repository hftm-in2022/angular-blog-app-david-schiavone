import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Blog } from '../model/blog';
import { Comment } from '../model/comment';
import { BlogHeaderComponent } from '../blog-header/blog-header.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink, BlogHeaderComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  blog?: Blog = undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blog = this.route.snapshot.data['blog'];
    console.log(typeof this.blog?.createdAt);
  }

  getComments(): Comment[] {
    if (this.blog?.comments instanceof Array) {
      return this.blog?.comments;
    }

    return [];
  }

  getLocalizedDateString(dateStr?: string): string {
    if (dateStr !== undefined) {
      return new Date(dateStr).toLocaleString();
    }
    return '';
  }
}

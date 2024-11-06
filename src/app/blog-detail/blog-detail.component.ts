import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Blog } from '../model/blog';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blog = this.route.snapshot.data['blog'];
  }

  getComments(): Comment[] {
    if (this.blog?.comments instanceof Array) {
      return this.blog?.comments;
    }

    return [];
  }
}

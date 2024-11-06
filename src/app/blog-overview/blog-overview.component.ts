import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { Blogs } from '../model/blogs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-overview',
  standalone: true,
  imports: [AsyncPipe, BlogCardComponent, NgIf],
  templateUrl: './blog-overview.component.html',
  styleUrl: './blog-overview.component.scss',
})
export class BlogOverviewComponent implements OnInit {
  blogs?: Blogs = undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blogs = this.route.snapshot.data['blogs'];
  }
}

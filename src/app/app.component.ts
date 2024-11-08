import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { BlogService } from './services/blog.service';
import { CommonModule } from '@angular/common';
import { Blogs } from './model/blogs';
import { BlogCardComponent } from './blog-card/blog-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BlogCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'blog-app';

  blogs$: Observable<Blogs> = EMPTY;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogService.loadBlogs();
  }
}

import { Component, Input } from '@angular/core';
import { Blog } from '../model/blog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input() blog?: Blog;
}

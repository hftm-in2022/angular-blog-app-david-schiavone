import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { ActivatedRoute } from '@angular/router';
import { BlogHeaderComponent } from '../blog-header/blog-header.component';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-blog-overview',
  standalone: true,
  imports: [BlogCardComponent, BlogHeaderComponent],
  templateUrl: './blog-overview.component.html',
  styleUrl: './blog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogOverviewComponent implements OnInit {
  blogs: WritableSignal<Blog[]> = signal([]);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blogs.set(this.route.snapshot.data['blogs'].data);
  }
}

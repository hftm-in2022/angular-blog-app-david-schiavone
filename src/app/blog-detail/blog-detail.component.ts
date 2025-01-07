import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogDetailComponent implements OnInit {
  blog: WritableSignal<Blog | undefined> = signal(undefined);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blog.set(this.route.snapshot.data['blog']);
  }

  getComments(blog?: Blog): Comment[] {
    if (blog?.comments instanceof Array) {
      return blog.comments;
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

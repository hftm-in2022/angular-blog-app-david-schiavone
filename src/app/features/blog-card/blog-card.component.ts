import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Blog } from '../../model/blog';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCardComponent {
  @Input() blog?: Blog;
}

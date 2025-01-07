import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [],
  templateUrl: './blog-header.component.html',
  styleUrl: './blog-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogHeaderComponent {
  @Input() title = '';
}

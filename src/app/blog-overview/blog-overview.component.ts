import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
} from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { BlogHeaderComponent } from '../blog-header/blog-header.component';
import { StateService } from '../services/redux/state.service';
import { AppState } from '../services/redux/app-state';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-blog-overview',
  standalone: true,
  imports: [BlogCardComponent, BlogHeaderComponent, MatProgressSpinner],
  templateUrl: './blog-overview.component.html',
  styleUrl: './blog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogOverviewComponent {
  state: WritableSignal<AppState>;

  constructor(private stateService: StateService) {
    this.state = this.stateService.getState();
  }
}

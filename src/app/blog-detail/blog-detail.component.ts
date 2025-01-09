import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Blog } from '../model/blog';
import { Comment } from '../model/comment';
import { AppState } from '../services/redux/app-state';
import { StateService } from '../services/redux/state.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink, MatProgressSpinner],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogDetailComponent {
  state: WritableSignal<AppState>;

  constructor(private stateService: StateService) {
    this.state = this.stateService.getState();
    this.stateService.dispatch({
      type: 'SET_PAGE_TITLE',
      payload: this.state().blogDetail?.title,
    });
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

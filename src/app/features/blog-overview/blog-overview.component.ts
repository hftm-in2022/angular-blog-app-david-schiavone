import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
} from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { StateService } from '../../services/redux/state.service';
import { AppState } from '../../services/redux/app-state';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-blog-overview',
  standalone: true,
  imports: [BlogCardComponent, MatProgressSpinner],
  templateUrl: './blog-overview.component.html',
  styleUrl: './blog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogOverviewComponent {
  state: WritableSignal<AppState>;

  constructor(private stateService: StateService) {
    this.stateService.dispatch({ type: 'SET_PAGE_TITLE', payload: 'Blogs' });
    this.state = this.stateService.getState(); // hier wäre es besser nur einen Teil des Models zu selektieren

    // warum die Daten aus dem Resolver nicht als input definieren?
  }
}

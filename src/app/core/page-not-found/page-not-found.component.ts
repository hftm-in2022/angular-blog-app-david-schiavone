import { Component } from '@angular/core';
import { StateService } from '../../services/redux/state.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  constructor(private stateService: StateService) {
    this.stateService.dispatch({
      type: 'SET_PAGE_TITLE',
      payload: 'Seite nicht gefunden',
    });
  }
}

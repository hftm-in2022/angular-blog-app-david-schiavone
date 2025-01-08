import { Injectable, signal } from '@angular/core';
import { AppState, AppStateAction, initialState } from './app-state';
import { appReducer } from './app-reducer';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state = signal<AppState>(initialState);

  getState() {
    return this.state;
  }

  dispatch(action: AppStateAction) {
    const newState = appReducer(this.state(), action);
    this.state.set(newState);
  }
}

import { Injectable, signal } from '@angular/core';
import { AppState, AppStateAction, initialState } from './app-state';
import { appReducer } from './app-reducer';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state = signal<AppState>(initialState);

  getState() {
    // warum nicht einfach ein public property?
    return this.state; // .asReadonly !! hier gibst du ein WritableSignal zurück.
  }

  dispatch(action: AppStateAction) {
    const newState = appReducer(this.state(), action);
    this.state.set(newState);
  }
}

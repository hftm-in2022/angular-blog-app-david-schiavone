import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    NgIf,
    NgFor,
    NgClass,
    NgStyle,
    RouterOutlet,
  ],
})
export class AppComponent {
  title = 'Angular 18 Demo-App';
  users = ['Alice', 'Bob', 'Charlie'];
  newUser = '';
  selectedUser: string | null = null;
  color = 'blue';

  addUser() {
    if (this.newUser) {
      this.users.push(this.newUser);
      this.newUser = '';
    }
  }

  selectUser(user: string) {
    this.selectedUser = user;
  }

  deselectUser() {
    this.selectedUser = null;
  }

  setColor(newColor: string) {
    this.color = newColor;
  }
}

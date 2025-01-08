import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-header.component.html',
  styleUrl: './blog-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogHeaderComponent {
  @Input() title = '';

  loggedIn = signal<boolean>(false);
  userName = signal<string>('');
  canAddBlogs = signal<boolean>(false);

  constructor(
    private oidcSecureService: OidcSecurityService,
    private userService: UserService,
  ) {
    this.oidcSecureService.checkAuth().subscribe((loginResponse) => {
      this.loggedIn.set(loginResponse.isAuthenticated);
      if (loginResponse.isAuthenticated) {
        this.userName.set(loginResponse.userData.email);
        this.oidcSecureService.getAccessToken().subscribe((accessToken) => {
          this.canAddBlogs.set(this.userService.hasRole(accessToken, 'user'));
        });
      }
    });
  }

  login() {
    this.oidcSecureService.authorize();
  }

  logout() {
    this.oidcSecureService.logoff().subscribe();
  }
}

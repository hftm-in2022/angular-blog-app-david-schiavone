import { Component, inject, signal, WritableSignal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { UserService } from '../../services/user.service';
import { StateService } from '../../services/redux/state.service';
import { AppState } from '../../services/redux/app-state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
  ],
})
export class SidebarComponent {
  private breakpointObserver = inject(BreakpointObserver);

  loggedIn = signal<boolean>(false);
  userName = signal<string>('');
  canAddBlogs = signal<boolean>(false);
  state: WritableSignal<AppState>;

  constructor(
    private oidcSecureService: OidcSecurityService,
    private userService: UserService,
    private stateService: StateService,
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

    this.state = this.stateService.getState();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  login() {
    this.oidcSecureService.authorize();
  }

  logout() {
    this.oidcSecureService.logoff().subscribe();
  }
}

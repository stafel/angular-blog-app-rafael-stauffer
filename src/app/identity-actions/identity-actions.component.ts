import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-identity-actions',
  templateUrl: './identity-actions.component.html',
  styleUrls: ['./identity-actions.component.scss'],
})
export class IdentityActionsComponent {
  @Input()
  isAuthenticated = false;

  @Input()
  userData: any = null;

  @Output()
  loginEvent = new EventEmitter<void>();

  @Output()
  logoutEvent = new EventEmitter<void>();

  login() {
    this.loginEvent.emit();
  }

  logout() {
    this.logoutEvent.emit();
  }
}

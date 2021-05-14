import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './core/auth/auth.service';
import { NotificationService } from './core/notifications/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';
  env = environment;

  notifications: string[] = [];

  constructor(private notificationSvc: NotificationService, private authSvc: AuthService) {
    this.notificationSvc.newNotification$.subscribe((text: string) =>
      this.notifications.unshift(text)
    );
  }

  get isAuthorized() {
    return this.authSvc.isAuthorized;
  }

  set isAuthorized(value: boolean) {
    this.authSvc.isAuthorized = value;
  }
}

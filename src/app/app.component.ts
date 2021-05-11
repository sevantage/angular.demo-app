import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
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

  constructor(private notificationSvc: NotificationService) {
    this.notificationSvc.newNotification.subscribe((text) =>
      this.notifications.unshift(text)
    );
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './core/auth/auth.service';
import { NotificationService } from './core/notifications/notification.service';
import { BlockComponent } from './shared/partials/block/block.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterLink, RouterOutlet, FormsModule, BlockComponent],
})
export class AppComponent {
  title = 'demo-app';
  env = environment;

  notifications: string[] = [];

  constructor(
    private notificationSvc: NotificationService,
    private authSvc: AuthService
  ) {
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

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationService } from 'src/app/core/notifications/notification.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss'],
  imports: [FormsModule],
})
export class NotifierComponent {
  text = '';

  constructor(private notificationSvc: NotificationService) {}

  onNotify() {
    if (this.text) this.notificationSvc.sendNotification(this.text);
  }
}

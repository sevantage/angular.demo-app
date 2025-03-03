import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/notifications/notification.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-notifier',
    templateUrl: './notifier.component.html',
    styleUrls: ['./notifier.component.scss'],
    imports: [FormsModule]
})
export class NotifierComponent implements OnInit {
  text: string = '';

  constructor(private notificationSvc: NotificationService) {}

  ngOnInit(): void {}

  onNotify() {
    if (this.text) this.notificationSvc.sendNotification(this.text);
  }
}

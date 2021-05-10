import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/notifications/notification.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss'],
})
export class NotifierComponent implements OnInit {
  text: string = '';

  constructor(private notificationSvc: NotificationService) {}

  ngOnInit(): void {}

  onNotify() {
    if (this.text) this.notificationSvc.sendNotification(this.text);
  }

  /*
  notifications: string[] = [];

  constructor(private notificationSvc: NotificationService) {
    this.notificationSvc.newNotification.subscribe(text => this.notifications.unshift(text))
  }
  */
}

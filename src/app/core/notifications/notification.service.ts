import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  newNotification = new EventEmitter<string>();

  constructor() { }

  sendNotification(text: string) {
    this.newNotification.next(text);
  }
}

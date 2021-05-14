import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  newNotification$ = new Subject<string>();

  constructor() { }

  sendNotification(text: string) {
    this.newNotification$.next(text);
  }
}

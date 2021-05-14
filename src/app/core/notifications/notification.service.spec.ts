import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should raise new notification event', (doneFn: DoneFn) => {
    service.newNotification$.subscribe(txt => {
      expect(txt).toEqual("TXT");
      doneFn();
    });
    service.sendNotification("TXT");
  });
});

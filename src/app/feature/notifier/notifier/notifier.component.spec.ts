import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NotificationService } from 'src/app/core/notifications/notification.service';

import { NotifierComponent } from './notifier.component';

describe('NotifierComponent', () => {
  let component: NotifierComponent;
  let fixture: ComponentFixture<NotifierComponent>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let notificationSvcSpy: any;

  beforeEach(async () => {
    notificationSvcSpy = jasmine.createSpyObj(NotificationService, [
      'sendNotification',
    ]);
    await TestBed.configureTestingModule({
    imports: [FormsModule, NotifierComponent],
    providers: [
        { provide: NotificationService, useValue: notificationSvcSpy },
    ],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send notifications', (doneFn: DoneFn) => {
    notificationSvcSpy.sendNotification.and.callFake((x: string) => {
      expect(x).toEqual("New notification");
      doneFn();
    });
    component.text = "New notification";
    component.onNotify();
  });
});

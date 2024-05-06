import {Component, inject} from '@angular/core';
import {NotificationService} from "../../core/services/notification.service";
import {Notification} from "../../core/services/notification.service";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent {
  notificationService= inject(NotificationService);
  notifications = this.notificationService.notifications

  closeNotification(notification: Notification) {
    this.notificationService.closeNotification(notification);
  }
}

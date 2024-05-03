import {Component, inject} from '@angular/core';
import {NotificationService} from "../../core/services/notification.service";

export interface Notification {
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  isVisible: boolean;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent {
  notificationService= inject(NotificationService);
  notifications = this.notificationService.notifications()

  closeNotification(notification: Notification) {
    this.notificationService.closeNotification(notification);
  }
}

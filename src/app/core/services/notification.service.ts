import {Injectable, signal} from '@angular/core';
import { Notification } from "../../standalone/notifications/notifications.component";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notifications = signal<Notification[]>([])

  notify(title: string, message: string, type: 'success' | 'error' | 'info'): void {
    const notification = { title, message, type, isVisible: false };
    this.notifications().unshift(notification);
    setTimeout(() => {
      notification.isVisible = true;
      setTimeout(() => this.closeNotification(notification), 5000)
    }, 10);
  }

  closeNotification(notification: Notification) {
    notification.isVisible = false;
    setTimeout(
      () => this.notifications.set(this.notifications().filter(n => n !== notification)), 200
    );
  }
}

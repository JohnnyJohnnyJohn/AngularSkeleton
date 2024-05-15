import {Injectable, signal} from '@angular/core';

export interface Notification {
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  isVisible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notifications = signal<Notification[]>([])

  notify(title: string, message: string, type: 'success' | 'error' | 'warning' | 'info'): void {
    const notification : Notification = { title, message, type, isVisible: false };
    this.notifications().push(notification);

    setTimeout(
      () => {
      notification.isVisible = true;
      setTimeout(
          () => this.closeNotification(notification),
          5000
        )
      },
      10
    );
  }

  closeNotification(notification: Notification) {
    notification.isVisible = false;

    setTimeout(
      () => this.notifications.set(this.notifications().filter(n => n !== notification)),
      200
    );
  }
}

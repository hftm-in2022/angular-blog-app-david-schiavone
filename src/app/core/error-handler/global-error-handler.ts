import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../../services/notification.service'; // Optional: Loggingservice zum Senden von Fehlerlogs an einen Server

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private notificationService: NotificationService) {}

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      this.handleHttpError(error);
    } else {
      console.error('Ein Fehler ist aufgetreten:', error);
      this.notificationService.showError(
        'Ein unerwarteter Fehler ist aufgetreten.',
      );
    }
  }

  private handleHttpError(error: HttpErrorResponse): void {
    switch (error.status) {
      case 404:
        this.notificationService.showError('Ressource nicht gefunden.');
        break;
      case 500:
        this.notificationService.showError(
          'Interner Serverfehler. Bitte versuchen Sie es später erneut.',
        );
        break;
      case 0:
        this.notificationService.showError(
          'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.',
        );
        break;
      default:
        this.notificationService.showError(
          'Ein unbekannter Fehler ist aufgetreten.',
        );
    }
  }
}

import {Injectable, OnInit, signal} from '@angular/core';

export interface Modal {
  title: string;
  message: string;
  action: string;
  isVisible: boolean;
  confirm?: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService{
  dialog : HTMLDialogElement | null = null;

  public modal : Modal = {
    title: '',
    message: '',
    action: '',
    isVisible: false
  };

  openModal(modal: Modal): void {
    this.modal = modal;
    this.dialog?.showModal();
  }

  closeModal(): void {
    this.modal.isVisible = false;
    setTimeout(() => this.dialog?.close(), 200);
  }

  confirmModal(): void {
    this.modal.confirm?.();
    this.closeModal();
  }
}

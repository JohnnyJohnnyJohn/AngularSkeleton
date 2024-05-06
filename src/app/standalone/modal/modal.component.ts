import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from "../../core/services/modal.service";

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  modalService = inject(ModalService);

  ngOnInit(): void {
    this.modalService.dialog = document.querySelector('dialog');
  }
}

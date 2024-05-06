import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-modal.component.html',
})
export class ConfirmationModalComponent implements OnInit{


  ngOnInit() {
    let dialog = document.querySelector('dialog');
    // dialog!.showModal();
  }
}

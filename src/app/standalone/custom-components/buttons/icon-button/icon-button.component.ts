import {Component, Input, OnInit} from '@angular/core';
import {MatFabButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatFabButton,
    MatMiniFabButton
  ],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent implements OnInit{
  @Input() buttonType: 'icon' | 'fab' | 'mini-fab' | 'extended-fab' = 'icon';
  @Input() icon: string | undefined;
  @Input() color: 'primary' | 'accent' | 'warn' | '' = '';
  @Input() disabled: boolean = false;

  ngOnInit() {
    if(this.color === '' && this.buttonType !== 'icon')
      this.color = 'accent';
  }
}

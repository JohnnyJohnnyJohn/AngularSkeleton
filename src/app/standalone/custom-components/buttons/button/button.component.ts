import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {FlexLayoutModule} from "@angular/flex-layout";


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, FlexLayoutModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent{
  @Input() color: 'primary' | 'accent' | 'warn' | '' = '';
  @Input() disabled: boolean = false;
  @Input() buttonType: 'basic' | 'raised' | 'stroked' | 'flat' = 'basic';
  @Input() icon: string | undefined;
}

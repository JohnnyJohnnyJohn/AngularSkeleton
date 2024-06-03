import {Component, effect, forwardRef, input, Input, signal} from '@angular/core';
import {FloatLabelType, MatError, MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {BooleanInput} from "@angular/cdk/coercion";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    FlexModule,
    MatError,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatPrefix,
    MatSuffix,
    ReactiveFormsModule
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements ControlValueAccessor{
  @Input() label: string | undefined;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() autocomplete: string = "off";
  @Input() hintLabel: string = '';
  @Input() appearance: 'fill' | 'outline' = 'fill';
  @Input() color: 'primary' | 'accent' | 'warn' | undefined;
  @Input() floatLabel: FloatLabelType = 'auto';
  @Input() required = false;
  @Input() hideRequiredMarker: BooleanInput = false;
  @Input() iconSuffix: string | undefined;
  @Input() iconPrefix: string | undefined;
  @Input() txtSuffix: string | undefined;
  @Input() txtPrefix: string | undefined;
  @Input() actionHide: boolean = false;
  @Input() actionClear: boolean = false;
  formControl = input.required<FormControl>();
  errorMessage = input<string>();

  hidePassword = signal(true);

  constructor() {
    effect(() => {
      if(this.actionHide) {
        this.type = this.hidePassword() ? 'password' : 'text';
      }
    });
  }

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

}

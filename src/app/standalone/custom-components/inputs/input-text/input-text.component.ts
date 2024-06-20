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
  @Input() labelValue: string | undefined;
  @Input() placeholderValue: string = '';
  @Input() typeValue: string = 'text';
  @Input() autocompleteValue: string = "off";
  @Input() hintLabelValue: string = '';
  @Input() appearanceValue: 'fill' | 'outline' = 'fill';
  @Input() colorValue: 'primary' | 'accent' | 'warn' | undefined;
  @Input() floatLabelTypeValue: FloatLabelType = 'auto';
  @Input() isRequired = false;
  @Input() hideRequiredMarkerValue: BooleanInput = false;
  @Input() iconSuffixValue: string | undefined;
  @Input() iconPrefixValue: string | undefined;
  @Input() txtSuffixValue: string | undefined;
  @Input() txtPrefixValue: string | undefined;
  @Input() hasActionHide: boolean = false;
  @Input() hasActionClear: boolean = false;
  inputFormControl = input.required<FormControl>();
  errorMessage = input<string>();

  hidePassword = signal(true);

  constructor() {
    effect(() => {
      if(this.hasActionHide) {
        this.typeValue = this.hidePassword() ? 'password' : 'text';
      }
    });
  }

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

}

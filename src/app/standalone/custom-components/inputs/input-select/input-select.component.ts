import {Component, Input} from '@angular/core';
import {MatSelectModule} from "@angular/material/select";
import {FloatLabelType} from "@angular/material/form-field";
import {BooleanInput} from "@angular/cdk/coercion";
import {FlexModule} from "@angular/flex-layout";
import {FormControl, ReactiveFormsModule, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [
    MatSelectModule,
    FlexModule,
    ReactiveFormsModule
  ],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.css'
})
export class InputSelectComponent {
  @Input() label: string = "";
  @Input() appearance: "fill" | "outline" = "fill";
  @Input() isMultiple: boolean = false;
  @Input() options: {label: string, value: string}[] = [];
  @Input() hintLabel: string = "";
  @Input() color: 'primary' | 'accent' | 'warn' | undefined;
  @Input() floatLabel: FloatLabelType = "auto";
  @Input() required = false;
  @Input() hideRequiredMarker: BooleanInput = false;
  @Input() validators: ValidatorFn | ValidatorFn[] = this.required ? Validators.required : [];
  @Input() errorMessages: {[key: string]: string} = {};

  formControl = new FormControl('');

  getErrorMessage() {
    for (const error in this.formControl.errors) {
      if (this.formControl.errors.hasOwnProperty(error) && this.errorMessages[error]) {
        return this.errorMessages[error];
      }
    }
    return 'Erreur';
  }
}

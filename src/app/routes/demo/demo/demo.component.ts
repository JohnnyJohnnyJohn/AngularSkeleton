import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonComponent} from "../../../standalone/custom-components/buttons/button/button.component";
import {IconButtonComponent} from "../../../standalone/custom-components/buttons/icon-button/icon-button.component";
import {InputTextComponent} from "../../../standalone/custom-components/inputs/input-text/input-text.component";
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    ButtonComponent,
    IconButtonComponent,
    ReactiveFormsModule,
    InputTextComponent,
    FlexLayoutModule
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  formBuilder = inject(FormBuilder);
  demoForm = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  });

  getEmailErrorMessage() {
    if (this.demoForm.controls.email.hasError('required')) {
      return 'Veuillez entrer votre email';
    }

    return this.demoForm.controls.email
      .hasError('pattern') ? 'Veuillez entrer un email valide' : '';
  }
}

import {Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
onSubmit() {
throw new Error('Method not implemented.');
}

  registroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

}

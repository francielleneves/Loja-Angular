import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

// Validador customizado de telefone
function phoneValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value || '').replace(/\D/g, '');
  return /^\d{10,11}$/.test(value) ? null : { invalidPhone: true };
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm!: FormGroup; // define mas não inicializa aqui

  constructor(private fb: FormBuilder) {
    // inicializa o form AFTER o FormBuilder ter sido injetado
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, phoneValidator]],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  submit() {
    if (this.contactForm.valid) {
      console.log('📩 Dados do contato:', this.contactForm.value);
      alert('Mensagem enviada com sucesso!');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}

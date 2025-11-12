import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { CartState } from '../../store/cart.states';
import * as CartActions from '../../store/cart.actions';

// ✅ Validador customizado de cartão (formato simples)
function cardValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value || '').replace(/\s+/g, '');
  return /^\d{13,19}$/.test(value) ? null : { invalidCard: true };
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkoutForm!: FormGroup; // ✅ declaração sem inicialização

  constructor(private fb: FormBuilder, private store: Store<{ cart: CartState }>) {
    // ✅ inicialização dentro do construtor
    this.checkoutForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, cardValidator]],
      expiry: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
    });
  }

  submit(): void {
    if (this.checkoutForm.valid) {
      console.log('💳 Dados do checkout:', this.checkoutForm.value);
      alert('Compra finalizada com sucesso!');
      this.store.dispatch(CartActions.clearCart());
      this.checkoutForm.reset();
    } else {
      this.checkoutForm.markAllAsTouched();
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CartState } from '../../store/cart.states';
import { selectCartCount } from '../../store/cart.selectors';

@Component({
  selector: 'app-cart-status',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a routerLink="/cart" class="nav-link position-relative text-warning fw-semibold">
      <i class="bi bi-cart3 fs-5"></i>
      <span
        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      >
        {{ count$ | async }}
      </span>
    </a>
  `,
  styles: [`
    .badge {
      font-size: 0.7rem;
      padding: 0.4em 0.6em;
    }
  `]
})
export class CartStatusComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.count$ = this.store.select(selectCartCount);
  }
}

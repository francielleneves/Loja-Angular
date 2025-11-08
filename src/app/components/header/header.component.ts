import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartStatusComponent } from '../cart-status/cart-status.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CartStatusComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

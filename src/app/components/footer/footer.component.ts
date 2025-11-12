import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer bg-dark text-light py-4 mt-5" aria-label="Rodapé do site">
      <div class="container d-flex flex-column align-items-center text-center gap-3">

        <!-- Logo / Título -->
        <div class="fw-bold text-warning fs-5 d-flex align-items-center gap-2">
          <span role="img" aria-label="Sacola de compras">🛍️</span>
          <span>Minha Loja Angular</span>
        </div>

        <!-- Navegação -->
        <nav class="footer-links d-flex flex-wrap justify-content-center gap-3" aria-label="Links do rodapé">
          <a routerLink="/" class="link">Início</a>
          <a routerLink="/contact" class="link">Contato</a>
          <a routerLink="/checkout" class="link">Checkout</a>
          <a href="https://fakestoreapi.com/" target="_blank" rel="noopener" class="link">API</a>
        </nav>

        <!-- Direitos autorais -->
        <p class="mb-0 small text-secondary">
          © {{ currentYear }} | Todos os direitos reservados.
        </p>

        <!-- Créditos -->
        <p class="mb-0 small text-secondary">
          Desenvolvido com <span class="text-danger" aria-hidden="true">♥</span> por
          <span class="text-warning fw-semibold">Franciele Neves</span>
        </p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.25);
      font-family: 'Segoe UI', Roboto, sans-serif;
      letter-spacing: 0.2px;
      transition: all 0.3s ease;
    }

    .footer-links .link {
      color: #f8f9fa;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.3s ease, transform 0.2s ease;
    }

    .footer-links .link:hover {
      color: #ffc107;
      text-decoration: underline;
      transform: translateY(-2px);
    }

    .footer-links .link:focus {
      outline: 2px solid #ffc107;
      outline-offset: 2px;
    }

    .text-warning {
      color: #ffc107 !important;
    }

    @media (max-width: 768px) {
      .footer {
        font-size: 0.9rem;
      }
      .footer-links {
        gap: 1rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}

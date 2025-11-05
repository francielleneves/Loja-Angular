// footer.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-light text-center py-3 mt-4">
      <p>&copy; 2025 Minha Loja Angular</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #f8f9fa;
      padding: 1rem;
      font-size: 0.9rem;
      color: #110101ff;
    }
  `]
})
export class FooterComponent {}

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ✅ minúsculo e correto
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // ✅ aqui é o lugar certo!
  ]
}).catch(err => console.error(err));

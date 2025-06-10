import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Configura tus rutas aquí
    provideHttpClient(),
    importProvidersFrom(CommonModule, FormsModule) // Para manejar formularios y directivas como *ngFor
  ]
}).catch(err => console.error('Error al iniciar la aplicación:', err));
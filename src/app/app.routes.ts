import { Routes } from '@angular/router';
import { UserProfileComponent } from './modules/security/components/user-profile/user-profile.component';
import { UserSessionsComponent } from './modules/security/components/user-sessions/user-sessions.component';

export const routes: Routes = [
  { 
    path: '',
    redirectTo: '/profile', // O la ruta que quieras como inicio
    pathMatch: 'full'
  },
  { path: 'profile', component: UserProfileComponent },
  // Otras rutas...
];
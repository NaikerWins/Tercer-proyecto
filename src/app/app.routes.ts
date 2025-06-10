import { Routes } from '@angular/router';
import { UserProfileComponent } from './modules/security/components/user-profile/user-profile.component';
import { UserSessionsComponent } from './modules/security/components/user-sessions/user-sessions.component';

export const routes: Routes = [
  { path: 'profile', component: UserProfileComponent },
  { path: 'sessions', component: UserSessionsComponent },
  // Agrega más rutas según necesites
];
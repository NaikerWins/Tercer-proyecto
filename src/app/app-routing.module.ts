import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './modules/security/components/user-profile/user-profile.component';
import { UserSessionsComponent } from './modules/security/components/user-sessions/user-sessions.component';
import { PermissionListComponent } from './modules/security/components/permissions/permission-list.component';
import { RolePermissionsComponent } from './modules/security/components/role-permissions/role-permissions.component';



const routes: Routes = [
  { path: 'user/:id/profile', component: UserProfileComponent },
  { path: 'user/:id/sessions', component: UserSessionsComponent },
  { path: 'permissions', component: PermissionListComponent },
  { path: 'role-permissions', component: RolePermissionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

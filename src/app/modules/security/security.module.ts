import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserSessionsComponent } from './components/user-sessions/user-sessions.component';
import { PermissionListComponent } from './components/permissions/permission-list.component';
import { RolePermissionsComponent } from './components/role-permissions/role-permissions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserProfileComponent,
    UserSessionsComponent,
    PermissionListComponent,
    RolePermissionsComponent
  ],
  exports: [
    UserProfileComponent,
    UserSessionsComponent,
    PermissionListComponent,
    RolePermissionsComponent
  ]
})
export class SecurityModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './modules/security/components/user-profile/user-profile.component';
import { UserSessionsComponent } from './modules/security/components/user-sessions/user-sessions.component';
import { PermissionListComponent } from './modules/security/components/permissions/permission-list.component';
import { RolePermissionsComponent } from './modules/security/components/role-permissions/role-permissions.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserSessionsComponent,
    PermissionListComponent,
    RolePermissionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

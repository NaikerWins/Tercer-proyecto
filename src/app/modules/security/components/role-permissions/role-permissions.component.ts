import { Component, OnInit } from '@angular/core';
import { AppPermission } from 'src/app/core/models/permission.model';
import { Role } from 'src/app/core/models/role.model';
import { RolePermission } from 'src/app/core/models/role-permission.model';

import { RoleService } from '../../services/role.service';
import { PermissionService } from '../../services/permission.service';
import { RolePermissionService } from '../../services/role-permission.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-permissions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [RoleService, PermissionService, RolePermissionService],
  templateUrl: './role-permissions.component.html',
  styleUrls: ['./role-permissions.component.css']
})
export class RolePermissionsComponent implements OnInit {
  roles: Role[] = [];
  permissions: AppPermission[] = [];
  selectedRoleId: number | null = null;
  rolePermissions: Set<number> = new Set();

  constructor(
    private roleService: RoleService,
    private permissionService: PermissionService,
    private rolePermissionService: RolePermissionService
  ) {}

  ngOnInit() {
    this.loadRoles();
    this.loadPermissions();
  }

  loadRoles() {
    this.roleService.getAll().subscribe({
      next: (data) => {
        this.roles = data;
        if (this.roles.length > 0) {
          this.selectedRoleId = this.roles[0].id;
          this.loadRolePermissions(this.selectedRoleId);
        }
      },
      error: (err) => console.error('Error al obtener roles', err)
    });
  }

  loadPermissions() {
    this.permissionService.getAll().subscribe({
      next: (data) => {
        this.permissions = data;
      },
      error: (err) => console.error('Error al obtener permisos', err)
    });
  }

  loadRolePermissions(roleId: number) {
  }

  onRoleChange() {
    if (this.selectedRoleId) {
      this.loadRolePermissions(this.selectedRoleId);
    }
  }

  togglePermission(permissionId: number) {
    if (!this.selectedRoleId) return;

    if (this.rolePermissions.has(permissionId)) {
      this.rolePermissionService.revoke(this.selectedRoleId, permissionId).subscribe({
        next: () => this.rolePermissions.delete(permissionId),
        error: (err) => console.error('Error al revocar permiso', err)
      });
    } else {
      this.rolePermissionService.assign(this.selectedRoleId, permissionId).subscribe({
        next: () => this.rolePermissions.add(permissionId),
        error: (err) => console.error('Error al asignar permiso', err)
      });
    }
  }
}

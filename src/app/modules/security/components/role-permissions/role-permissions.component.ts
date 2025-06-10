import { Component, OnInit, Input } from '@angular/core';
import { AppPermission } from 'src/app/core/models/permission.model';
import { PermissionService } from 'src/app/modules/security/services/permission.service';
import { RoleService } from 'src/app/modules/security/services/role.service';
import { RolePermissionService } from 'src/app/modules/security/services/role-permission.service';


@Component({
  selector: 'app-role-permissions',
  template: `
    <h3>Asignar Permisos a Rol</h3>
    <select [(ngModel)]="selectedRoleId">
      <option *ngFor="let r of roles" [value]="r.id">{{ r.name }}</option>
    </select>
    <div *ngFor="let p of permissions">
      <label>
        <input type="checkbox" (change)="togglePermission(p.id)" />
        {{ p.method }} {{ p.url }}
      </label>
    </div>
  `
})

export class RolePermissionsComponent implements OnInit {
  roles: any[] = [];
  permissions: AppPermission[] = [];
  selectedRoleId!: number;

  constructor(
    private roleService: RoleService,
    private permissionService: PermissionService,
    private rolePermissionService: RolePermissionService
  ) {}

  ngOnInit() {
    this.roleService.getAll().subscribe(data => this.roles = data);
    this.permissionService.getAll().subscribe(data => this.permissions = data);
  }

  togglePermission(permissionId: number) {
    if (this.selectedRoleId) {
      this.rolePermissionService.assign(this.selectedRoleId, permissionId).subscribe();
    }
  }
}

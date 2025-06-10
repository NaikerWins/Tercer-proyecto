import { Component, OnInit, Input } from '@angular/core';
import { AppPermission } from 'src/app/core/models/permission.model';
import { PermissionService } from 'src/app/modules/security/services/permission.service';
@Component({
  selector: 'app-permission-list',
  template: `
    <h3>Permisos</h3>
    <ul>
      <li *ngFor="let p of permissions">
        {{ p.method }} {{ p.url }}
      </li>
    </ul>

    <form (ngSubmit)="addPermission()">
      <input [(ngModel)]="newPermission.method" name="method" placeholder="Método" required />
      <input [(ngModel)]="newPermission.url" name="url" placeholder="URL" required />
      <button type="submit">Crear</button>
    </form>
  `
})
export class PermissionListComponent implements OnInit {
  permissions: AppPermission[] = [];
  newPermission: AppPermission = { id: 0, url: '', method: '' };

  constructor(private permissionService: PermissionService) {}

  ngOnInit() {
    this.permissionService.getAll().subscribe(data => this.permissions = data);
  }

  addPermission() {
    this.permissionService.create(this.newPermission).subscribe(() => {
      this.newPermission = { id: 0, url: '', method: '' };
      this.ngOnInit();
    });
  }
}

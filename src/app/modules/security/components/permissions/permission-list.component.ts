import { Component, OnInit } from '@angular/core';
import { AppPermission } from 'src/app/core/models/permission.model';
import { PermissionService } from '../../services/permission.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-permission-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})
export class PermissionListComponent implements OnInit {
  permissions: AppPermission[] = [];
  newPermission: Omit<AppPermission, 'id'> = { url: '', method: '' };

  constructor(private permissionService: PermissionService) {}

  ngOnInit() {
    this.loadPermissions();
  }

  loadPermissions() {
    this.permissionService.getAll().subscribe(data => {
      this.permissions = data;
    });
  }

  createPermission() {
    this.permissionService.create(this.newPermission).subscribe({
      next: () => {
        this.loadPermissions();
        this.newPermission = { url: '', method: '' };
        alert('Permiso creado correctamente');
      },
      error: (err) => console.error('Error al crear permiso', err)
    });
  }

  deletePermission(id: number) {
    if (confirm('¿Estás seguro de eliminar este permiso?')) {
      this.permissionService.delete(id).subscribe({
        next: () => {
          this.loadPermissions();
          alert('Permiso eliminado correctamente');
        },
        error: (err) => console.error('Error al eliminar permiso', err)
      });
    }
  }
}

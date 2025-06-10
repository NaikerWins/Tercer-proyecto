import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class RolePermissionService {
  private apiUrl = environment.api + '/role-permissions';

  constructor(private http: HttpClient) {}

  assign(roleId: number, permissionId: number): Observable<void> {
    return this.http.post<void>(this.apiUrl, { roleId, permissionId });
  }

  revoke(roleId: number, permissionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${roleId}/${permissionId}`);
  }
}
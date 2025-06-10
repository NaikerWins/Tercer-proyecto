import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppPermission } from 'src/app/core/models/permission.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  private apiUrl = environment.api + '/permissions';

  constructor(private http: HttpClient) {}

  getAll(): Observable<AppPermission[]> {
    return this.http.get<AppPermission[]>(this.apiUrl);
  }

  create(data: Omit<AppPermission, 'id'>): Observable<AppPermission> {
    return this.http.post<AppPermission>(this.apiUrl, data);
  }

  revoke(permissionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${permissionId}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

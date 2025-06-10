import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/core/models/profile.model';
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class RolePermissionService {
  private apiUrl = environment.api + '/role-permissions';
  constructor(private http: HttpClient) {}

  assign(roleId: number, permissionId: number): Observable<any> {
    return this.http.post(this.apiUrl, { roleId, permissionId });
  }
}

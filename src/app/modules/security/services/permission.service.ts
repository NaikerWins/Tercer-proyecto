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

create(data: AppPermission): Observable<AppPermission> {
  return this.http.post<AppPermission>(this.apiUrl, data);
}
}

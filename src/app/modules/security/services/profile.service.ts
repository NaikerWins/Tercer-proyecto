import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/core/models/profile.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private apiUrl = environment.api + '/profiles';

  constructor(private http: HttpClient) {}

  get(userId: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/user/${userId}`);
  }

  update(userId: number, data: Partial<Profile>): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiUrl}/user/${userId}`, data);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from 'src/app/core/models/session.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private apiUrl = environment.api + '/sessions';
  constructor(private http: HttpClient) {}

  getByUser(userId: number): Observable<Session[]> {
    return this.http.get<Session[]>(`${this.apiUrl}/user/${userId}`);
  }
}

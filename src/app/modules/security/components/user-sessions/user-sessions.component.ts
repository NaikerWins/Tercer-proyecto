import { Component, OnInit, Input } from '@angular/core';
import { Session } from 'src/app/core/models/session.model';
import { SessionService } from 'src/app/modules/security/services/session.service';
@Component({
  selector: 'app-user-sessions',
  template: `
    <h3>Sesiones activas</h3>
    <ul>
      <li *ngFor="let s of sessions">
        Token: {{ s.token }} | Expira: {{ s.expiration }} | Estado: {{ s.state }}
      </li>
    </ul>
  `
})
export class UserSessionsComponent implements OnInit {
  @Input() userId!: number;
  sessions: Session[] = [];

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.sessionService.getByUser(this.userId).subscribe(data => this.sessions = data);
  }
}

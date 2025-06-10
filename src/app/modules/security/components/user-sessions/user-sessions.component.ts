import { Component, OnInit, Input } from '@angular/core';
import { Session } from 'src/app/core/models/session.model';
import { SessionService } from 'src/app/modules/security/services/session.service';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-sessions',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './user-sessions.component.html',
  styleUrls: ['./user-sessions.component.css']
})
export class UserSessionsComponent implements OnInit {
  @Input() userId!: number;
  sessions: Session[] = [];

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    if (this.userId) {
      this.sessionService.getByUser(this.userId).subscribe({
        next: (data) => {
          this.sessions = data;
        },
        error: (err) => console.error('Error al obtener sesiones', err)
      });
    }
  }

  revokeSession(sessionId: string) {
    this.sessionService.revoke(sessionId).subscribe({
      next: () => {
        this.sessions = this.sessions.filter(s => s.id !== sessionId);
        alert('Sesión revocada correctamente');
      },
      error: (err) => {
        console.error('Error al revocar sesión', err);
        alert('No se pudo revocar la sesión. Inténtalo nuevamente.');
      }
    });
  }
}
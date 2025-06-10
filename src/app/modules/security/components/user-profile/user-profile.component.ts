import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from 'src/app/core/models/profile.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true, // <-- Esto es crucial
  imports: [CommonModule, FormsModule], // <-- Importa lo que necesites
  template: `
    <h3>Perfil</h3>
    <form (ngSubmit)="update()">
      <input [(ngModel)]="profile.phone" name="phone" placeholder="Teléfono" required />
      <input [(ngModel)]="profile.photo" name="photo" placeholder="URL de Foto" />
      <button type="submit">Actualizar</button>
    </form>
  `
})
export class UserProfileComponent implements OnInit {
  @Input() userId!: number;
  profile!: Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.get(this.userId).subscribe(data => this.profile = data);
  }

  update() {
    this.profileService.update(this.userId, this.profile).subscribe();
  }
}

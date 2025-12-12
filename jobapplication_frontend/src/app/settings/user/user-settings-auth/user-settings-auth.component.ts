import { Component } from '@angular/core';

@Component({
  selector: 'app-user-settings-auth',
  templateUrl: './user-settings-auth.component.html',
  styleUrls: ['./user-settings-auth.component.css']
})
export class UserSettingsAuthComponent {

  activeModal: string | null = null;

  openModal(modalType: string): void {
    this.activeModal = modalType;
  }

  closeModal(): void {
    this.activeModal = null;
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-password-settings',
  templateUrl: './new-password-settings.component.html',
  styleUrls: ['./new-password-settings.component.css']
})
export class NewPasswordSettingsComponent {
  passwordForm: FormGroup;
  passwordMessage: string = '';
  passwordMessageClass: string = '';

  constructor(private formBuilder: FormBuilder,private userService : UserService) {
    this.passwordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required, Validators.minLength(4)]],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(4)]]
    }, { validator: this.passwordMatchValidator.bind(this) }); 
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmNewPassword = formGroup.get('confirmNewPassword')?.value;
    return newPassword === confirmNewPassword ? null : { mismatch: true };
  }

  isInvalidAndTouched(field: string): boolean {
    const ctrl = this.passwordForm.get(field);
    return ctrl !== null && ctrl.invalid && ctrl.touched;
  }

  showPasswordMessage(message: string, type: string = 'error') {
    this.passwordMessage = message;
    this.passwordMessageClass = type === 'error' ? 'text-red-500' : 'text-green-500';

    setTimeout(() => {
      this.passwordMessage = '';
    }, 5000);
  }



  onSubmit() {
    if (this.passwordForm.valid) {
      const currentPassword = this.passwordForm.get('currentPassword')?.value;
      const newPassword = this.passwordForm.get('newPassword')?.value;

      this.userService.currentUser.subscribe(user => {
        if (user && user._id) {
          this.userService.changePassword(user._id, currentPassword, newPassword).subscribe({
            next: (response) => {
              this.showPasswordMessage('Le mot de passe a été changé avec succès.', 'success');
            },
            error: (error) => {
              this.showPasswordMessage('Erreur lors du changement du mot de passe.');
            }
          });
        }
      });
    } else {
      this.showPasswordMessage('Veuillez corriger les erreurs avant de soumettre le formulaire.');
    }
  }


}
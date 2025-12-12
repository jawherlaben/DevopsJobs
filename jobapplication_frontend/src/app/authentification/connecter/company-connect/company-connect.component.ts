import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentification.service';
import { AuthentificationTypeService } from '../../authentification-type.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-connect',
  templateUrl: './company-connect.component.html',
  styleUrls: ['./company-connect.component.css']
})
export class CompanyConnectComponent {
  authForm: FormGroup;
  loginMessage: string = '';
  loginMessageClass: string = '';

  onClick(): void {
    this.authentificationService.emitUserType();
  }

  constructor( private formBuilder: FormBuilder, private authService: AuthenticationService, private authentificationService: AuthentificationTypeService,    private toastr: ToastrService  
    ) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  isInvalidAndTouched(field: string): boolean {
    const ctrl = this.authForm.get(field);
    return ctrl !== null && ctrl.invalid && ctrl.touched;
  }

 
  onSubmit() {
    if (this.authForm.valid) {
      this.authService.companyLogin(this.authForm.value.email, this.authForm.value.password)
        .subscribe({
          next: (response) => {
            if (response.token)
              this.toastr.success('Login successful', 'Success');  
            else
              this.toastr.error('Erreur de connexion', 'Error');
          },
          error: (error) => {
            this.toastr.error('Erreur de connexion', 'Error');  
          }
        });
    }
    else 
    if(!this.authForm.valid)
    {
      this.toastr.error('Veuillez vérifier le formulaire.', 'Error');
    }
  }
  
}

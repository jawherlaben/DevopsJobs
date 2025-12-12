import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthentificationTypeService } from './authentification-type.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  authType: string = '';
  connectType = 'user';
  
  setconnectType(type: string) {
    this.connectType = type;
  }
  
  private subscription: Subscription;

  constructor(private authentificationService: AuthentificationTypeService) {
    this.subscription = this.authentificationService.userType$.subscribe(() => {
      this.handleUserType();
    });
  }
  
  ngOnInit() {
    this.authType = 'login';
  }

  handleUserType(): void {
    if (this.authType == 'login')
      this.authType = 'inscrire';
    else
      this.authType = 'login';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
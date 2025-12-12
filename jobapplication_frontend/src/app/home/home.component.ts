import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  isUserLoggedIn: boolean = false;


  constructor(private authService: AuthenticationService) {}

    ngOnInit() {
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.isUserLoggedIn = loggedIn;
    });

  }
}

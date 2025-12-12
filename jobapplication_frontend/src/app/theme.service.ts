import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private darkMode = false;

  constructor() {
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    this.updateBodyClass();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    if (this.darkMode) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    
    }
  }

  isDarkModeEnabled() {
    return this.darkMode;
  }

  private updateBodyClass() {
    document.body.classList.toggle('dark-mode', this.darkMode);
  }
}
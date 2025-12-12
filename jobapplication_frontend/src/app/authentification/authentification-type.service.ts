import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationTypeService {
  private userTypeSubject = new BehaviorSubject<void>(undefined);

  userType$: Observable<void> = this.userTypeSubject.asObservable();

  emitUserType(): void {
    this.userTypeSubject.next();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/* The `@Injectable()` decorator with the `providedIn: 'root'` option in Angular is used to provide the
service at the root level of the application. This means that the service is a singleton and there
will be only one instance of it created and shared across the entire application. When the
application is bootstrapped, Angular will create an instance of the service and make it available
for injection throughout the application. */
@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  private developerModeSubject = new BehaviorSubject<boolean>(
    this.isDeveloperModeEnabled()
  );
  public developerMode$: Observable<boolean> = this.developerModeSubject.asObservable();

  constructor() {}

  isDeveloperModeEnabled(): boolean {
    if (typeof localStorage === 'undefined') {
      return false;
    }
    return localStorage.getItem('developerMode') === 'true';
  }

  toggleDeveloperMode(): void {
    const currentState = this.isDeveloperModeEnabled();
    const newState = !currentState;
    localStorage.setItem('developerMode', String(newState));
    this.developerModeSubject.next(newState);
  }

  enableDeveloperMode(): void {
    localStorage.setItem('developerMode', 'true');
    this.developerModeSubject.next(true);
  }

  disableDeveloperMode(): void {
    localStorage.setItem('developerMode', 'false');
    this.developerModeSubject.next(false);
  }
}

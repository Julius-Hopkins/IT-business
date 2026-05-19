import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';

// Adjust if your API uses different casing/routes:
const PEOPLE_ENDPOINT = 'api/v1/People';

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export const personListResolver: ResolveFn<Person[]> = () => {
  const api = inject(ApiService);
  const router = inject(Router);

  return api.get<Person[]>(PEOPLE_ENDPOINT).pipe(
    catchError((err) => {
      console.error('Person list resolver failed', err);
      router.navigate(['/error'], { queryParams: { from: 'people-list' } });
      return of([] as Person[]);
    })
  );
};

export const personByIdResolver: ResolveFn<Person | null> = (route: ActivatedRouteSnapshot) => {
  const api = inject(ApiService);
  const router = inject(Router);

  const id = Number(route.paramMap.get('id'));
  if (!Number.isFinite(id)) {
    router.navigate(['/not-found']);
    return of(null);
  }

  return api.get<Person>(`${PEOPLE_ENDPOINT}/${id}`).pipe(
    catchError((err) => {
      console.error('Person by-id resolver failed', err);
      router.navigate(['/not-found']);
      return of(null);
    })
  );
};
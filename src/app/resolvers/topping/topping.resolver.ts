import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';

const TOPPINGS_ENDPOINT = 'api/v1/Toppings';

export interface Topping {
  id: number;
  name: string;
  // add other fields you have
}

export const toppingListResolver: ResolveFn<Topping[]> = () => {
  const api = inject(ApiService);
  const router = inject(Router);

  return api.get<Topping[]>(TOPPINGS_ENDPOINT).pipe(
    catchError((err) => {
      console.error('Topping list resolver failed', err);
      router.navigate(['/error'], { queryParams: { from: 'toppings-list' } });
      return of([] as Topping[]);
    })
  );
};

export const toppingByIdResolver: ResolveFn<Topping | null> = (route: ActivatedRouteSnapshot) => {
  const api = inject(ApiService);
  const router = inject(Router);

  const id = Number(route.paramMap.get('id'));
  if (!Number.isFinite(id)) {
    router.navigate(['/not-found']);
    return of(null);
  }

  return api.get<Topping>(`${TOPPINGS_ENDPOINT}/${id}`).pipe(
    catchError((err) => {
      console.error('Topping by-id resolver failed', err);
      router.navigate(['/not-found']);
      return of(null);
    })
  );
};
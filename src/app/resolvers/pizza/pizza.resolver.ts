import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';

const PIZZAS_ENDPOINT = 'api/v1/Pizzas';

export interface Pizza {
  id: number;
  name: string;
  // add fields (size, price, toppingIds, etc.)
}

export const pizzaListResolver: ResolveFn<Pizza[]> = () => {
  const api = inject(ApiService);
  const router = inject(Router);

  return api.get<Pizza[]>(PIZZAS_ENDPOINT).pipe(
    catchError((err) => {
      console.error('Pizza list resolver failed', err);
      router.navigate(['/error'], { queryParams: { from: 'pizzas-list' } });
      return of([] as Pizza[]);
    })
  );
};

export const pizzaByIdResolver: ResolveFn<Pizza | null> = (route: ActivatedRouteSnapshot) => {
  const api = inject(ApiService);
  const router = inject(Router);

  const id = Number(route.paramMap.get('id'));
  if (!Number.isFinite(id)) {
    router.navigate(['/not-found']);
    return of(null);
  }

  return api.get<Pizza>(`${PIZZAS_ENDPOINT}/${id}`).pipe(
    catchError((err) => {
      console.error('Pizza by-id resolver failed', err);
      router.navigate(['/not-found']);
      return of(null);
    })
  );
};
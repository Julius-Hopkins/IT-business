import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';

const ORDERS_ENDPOINT = 'api/v1/Orders';

export interface Order {
  id: number;
  // likely: personId, pizzaIds, total, createdAt, etc.
}

export const orderListResolver: ResolveFn<Order[]> = () => {
  const api = inject(ApiService);
  const router = inject(Router);

  return api.get<Order[]>(ORDERS_ENDPOINT).pipe(
    catchError((err) => {
      console.error('Order list resolver failed', err);
      router.navigate(['/error'], { queryParams: { from: 'orders-list' } });
      return of([] as Order[]);
    })
  );
};

export const orderByIdResolver: ResolveFn<Order | null> = (route: ActivatedRouteSnapshot) => {
  const api = inject(ApiService);
  const router = inject(Router);

  const id = Number(route.paramMap.get('id'));
  if (!Number.isFinite(id)) {
    router.navigate(['/not-found']);
    return of(null);
  }

  return api.get<Order>(`${ORDERS_ENDPOINT}/${id}`).pipe(
    catchError((err) => {
      console.error('Order by-id resolver failed', err);
      router.navigate(['/not-found']);
      return of(null);
    })
  );
};
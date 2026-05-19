import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { PizzaCreateDto, PizzaModel } from '../models/pizza-model';
import { PagedResultInterface } from '../models/paged-result-interface';


@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private readonly endpoint = 'api/v1/Pizzas';

  constructor(private api: ApiService) {}

  getAll(): Observable<PizzaModel[]> {
    return this.api.get<PizzaModel[]>(this.endpoint);
  }

  getAllWithDetails(): Observable<PizzaModel[]> {
    return this.api.get<PizzaModel[]>(`${this.endpoint}/details`);
  }

  getById(id: number): Observable<PizzaModel> {
    return this.api.get<PizzaModel>(`${this.endpoint}/${id}`);
  }

  getByIdWithDetails(id: number): Observable<PizzaModel> {
    return this.api.get<PizzaModel>(`${this.endpoint}/${id}/details`);
  }

  create(pizza: Omit<PizzaCreateDto, 'id'>): Observable<PizzaCreateDto> {
    return this.api.post<PizzaCreateDto>(this.endpoint, pizza);
  }

  update(pizza: PizzaModel): Observable<PizzaModel> {
    return this.api.put<PizzaModel>(`${this.endpoint}/${pizza.id}`, pizza);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete<boolean>(`${this.endpoint}/${id}`);
  }

  getPizzasPaged(page: number, pageSize: number): Observable<PagedResultInterface<PizzaModel>> {
    return this.api.getWithParams<PagedResultInterface<PizzaModel>>(`${this.endpoint}`, {
      page,
      pageSize,
    });
  }

  getPizzasPagedDetails(
    page: number,
    pageSize: number,
  ): Observable<PagedResultInterface<PizzaModel>> {
    return this.api.getWithParams<PagedResultInterface<PizzaModel>>(
      `${this.endpoint}/paged/details`,
      {
        page,
        pageSize,
      },
    );
  }
}

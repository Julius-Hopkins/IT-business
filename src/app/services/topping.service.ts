import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { PagedResultInterface } from '../models/paged-result-interface';
import { ToppingCreateDto, ToppingModel } from '../models/topping-model';


@Injectable({
  providedIn: 'root',
})
export class ToppingService {
  private readonly endpoint = 'api/v1/toppings';

  constructor(private api: ApiService) {}

  getAll(): Observable<ToppingModel[]> {
    return this.api.get<ToppingModel[]>(this.endpoint);
  }

  getAllWithDetails(): Observable<ToppingModel[]> {
    return this.api.get<ToppingModel[]>(`${this.endpoint}/details`);
  }

  getById(id: number): Observable<ToppingModel> {
    return this.api.get<ToppingModel>(`${this.endpoint}/${id}`);
  }

  getByIdWithDetails(id: number): Observable<ToppingModel> {
    return this.api.get<ToppingModel>(`${this.endpoint}/${id}/details`);
  }

  create(topping: Omit<ToppingCreateDto, 'id'>): Observable<ToppingCreateDto> {
    return this.api.post<ToppingCreateDto>(this.endpoint, topping);
  }

  update(topping: ToppingModel): Observable<ToppingModel> {
    return this.api.put<ToppingModel>(`${this.endpoint}/${topping.id}`, topping);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete<boolean>(`${this.endpoint}/${id}`);
  }

  getToppingsPaged(page: number, pageSize: number): Observable<PagedResultInterface<ToppingModel>> {
    return this.api.getWithParams<PagedResultInterface<ToppingModel>>(`${this.endpoint}/paged`, {
      page,
      pageSize,
    });
  }

  getToppingsPagedDetails(
    page: number,
    pageSize: number,
  ): Observable<PagedResultInterface<ToppingModel>> {
    return this.api.getWithParams<PagedResultInterface<ToppingModel>>(
      `${this.endpoint}/paged/details`,
      {
        page,
        pageSize,
      },
    );
  }

  
}

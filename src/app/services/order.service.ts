import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/order-model';
import { ApiService } from './api.service';
import { PagedResultInterface } from '../models/paged-result-interface';
import { OrderInterface } from '../models/order-interface';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly endpoint = 'api/v1/Orders';

  constructor(private api: ApiService) {}

  getAll(): Observable<OrderModel[]> {
    return this.api.get<OrderModel[]>(this.endpoint);
  }

  getById(id: number): Observable<OrderModel> {
    return this.api.get<OrderModel>(`${this.endpoint}/${id}`);
  }

    getByIdWithDetails(id: number): Observable<OrderModel> {
      return this.api.get<OrderModel>(`${this.endpoint}/${id}/details`);
    }

  create(order: Omit<OrderModel, 'id'>): Observable<OrderModel> {
    return this.api.post<OrderModel>(this.endpoint, order);
  }

  update(order: OrderModel): Observable<OrderModel> {
    return this.api.put<OrderModel>(`${this.endpoint}/${order.orderId}`, order);
  }

  delete(id: number): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }

  getAllDetail(): Observable<OrderModel[]> {
    return this.api.get<OrderModel[]>(`${this.endpoint}/details`);
  }

  getOrderPaged(page: number, pageSize:number) {
    return this.api.getWithParams<PagedResultInterface<OrderInterface>>(`${this.endpoint}/paged`, {
      page,
      pageSize,
    });
  }

  getOrdersPagedDetails(
    page: number,
    pageSize: number,
  ): Observable<PagedResultInterface<OrderModel>> {
    return this.api.getWithParams<PagedResultInterface<OrderModel>>(
      `${this.endpoint}/paged/details`,
      {
        page,
        pageSize,
      },
    );
  }
}
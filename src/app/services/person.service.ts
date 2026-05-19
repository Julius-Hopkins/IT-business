import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { PersonModel } from '../models/person-model';
import { PagedResultInterface } from '../models/paged-result-interface';
import { PersonInterface } from '../models/person-interface';

@Injectable({ providedIn: 'root' })
export class PersonService {
  private readonly endpoint = 'api/v1/people';

  constructor(private api: ApiService) {}

  getAll(): Observable<PersonModel[]> {
    return this.api.get<PersonModel[]>(this.endpoint);
  }

  getById(id: number): Observable<PersonModel> {
    return this.api.get<PersonModel>(`${this.endpoint}/${id}`);
  }

  create(person: Omit<PersonModel, 'id'>): Observable<PersonModel> {
    return this.api.post<PersonModel>(this.endpoint, person);
  }

  update(person: PersonModel): Observable<PersonModel> {
    return this.api.put<PersonModel>(`${this.endpoint}/${person.id}`, person);
  }

  delete(id: number): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }

  getPersonPaged(page: number, pageSize:number) {
    return this.api.getWithParams<PagedResultInterface<PersonInterface>>(`${this.endpoint}/paged`, {
      page,
      pageSize,
    });
  }
}
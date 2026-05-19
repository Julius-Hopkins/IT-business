import { OrderInterface } from './order-interface';
import { PersonModel } from './person-model';
import { PizzaModel } from './pizza-model';

export class OrderModel implements OrderInterface {
  public orderId: number = 0;
  public personId: number = 0;
  public id: number = 0;
  public personName: string = '';
  public person: PersonModel = new PersonModel;
  public pizzas: PizzaModel[] = [];
  public pizzaIds: number[] = [];
  public phone: string = '';
  public email: string = '';
  public personIds: number[] = [];
  public total: number = 0.00;
  public orderDate?: string | Date = undefined;

}

import { PersonModel } from "./person-model";
import { PizzaModel } from "./pizza-model";

export interface OrderInterface {
  orderId: number;
  id: number;
  personId: number;
  personName: string;
  pizzas: PizzaModel[];
  phone: string;
  email: string;
  personIds: number[];
  total: number;
  orderDate?: Date | undefined | string;
  person: PersonModel;
}

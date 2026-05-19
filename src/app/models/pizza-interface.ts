import { ToppingModel } from "./topping-model";

export interface PizzaInterface {
  name: string;
  toppingIds: number[];
  basePrice: number;
  id: number;
}

import { PizzaInterface } from './pizza-interface';
import { ToppingModel, ToppingModelDto } from './topping-model';

export class PizzaModel implements PizzaInterface {
  public name: string = '';
  public toppingIds: number[] = [];
  public basePrice: number = 0.00;
  public id: number = 0;
  public toppings: ToppingModel[] = [];
  public description: string = '';
}

/** This removes the Topping Model
 *  To Create a new Pizza without
 *  The API droping the call.
 */
export class PizzaCreateDto implements PizzaInterface {
  name: string = "";
  toppingIds: number[] = [];
  basePrice: number = 0;
  id: number = 0;
}
import { ToppingInterface } from './topping-interface';

export class ToppingModel implements ToppingInterface {
  public name: string = '';
  public price: number = 0.00;
  public isAvailable: boolean = false;
  public id: number = 0;

}

/** This removes the Topping Model
 *  To Create a new Pizza without
 *  The API droping the call.
 */
export class ToppingCreateDto implements ToppingInterface {
  name: string = '';
  price: number = 0;
  isAvailable: boolean = true;
  id: number = 0;
}

export class ToppingModelDto implements ToppingInterface {
  name: string = '';
  price: number = 0;
  isAvailable: boolean = true;
  id: number = 0;
}
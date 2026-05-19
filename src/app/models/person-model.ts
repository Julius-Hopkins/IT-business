import { PersonInterface } from './person-interface';

export class PersonModel implements PersonInterface {
  public id: number = 0;
  public firstName: string = '';
  public lastName: string = '';
  public phone: string = '';
  public email: string = '';

  public get fullName() : string {
    return `${this.firstName} ${this.lastName}`;
  }
}

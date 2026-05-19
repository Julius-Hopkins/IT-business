import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { OrderModel } from '../models/order-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  static email(): ValidatorFn {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) return null;

      return emailRegex.test(value) ? null : { email: true };
    };
  }

  static phone(): ValidatorFn {
    const phoneRegex = /^(\(\d{3}\)\s\d{3}[- ]\d{4}|\d{3}[- ]\d{3}[- ]\d{4}|\d{3}\.\d{3}\.\d{4})$/;

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) return null;

      return phoneRegex.test(value) ? null : { phone: true };
    };
  }

static currency(): ValidatorFn {
  const currencyRegex = /^(\d{1,3}(,\d{3})*|\d+)(\.\d{1,2})?$/;

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value == null || value === '') return null;

    const stringValue = String(value).trim();

    if (!currencyRegex.test(stringValue)) {
      return { currency: true };
    }

    const normalized = stringValue.replace(/,/g, '');
    const number = Number(normalized);

    if (isNaN(number)) {
      return { currency: true };
    }

    return null;
  };
}

  validateOrder(order: OrderModel): boolean {
    if (!order) return false;

    // person required
    if (!order.personId || Number(order.personId) <= 0) {
      return false;
    }

    // must have at least one pizza
    if (!order.pizzas || order.pizzas.length === 0) {
      return false;
    }

    // optional: ensure pizzas are valid
    for (const p of order.pizzas) {
      if (!p || !p.id) {
        return false;
      }
    }

    return true;
  }

  validateOrderDetails(order: OrderModel): boolean {
    if (!order) return false;

    // person required
    if (!order.personId || Number(order.personId) <= 0) {
      return false;
    }

    // must have at least one pizza
    if (!order.pizzas || order.pizzas.length === 0) {
      return false;
    }

    // optional: ensure pizzas are valid
    for (const p of order.pizzas) {
      if (!p || !p.id) {
        return false;
      }
    }

    return true;
  }
}

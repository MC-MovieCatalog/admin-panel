import { Validators } from '@angular/forms';

export class CustomFormBuilder {

    validators: Validators;
    disabled: boolean;

    constructor(required: boolean, validator: Validators) {
        this.validators = validator;
        this.disabled = required;
    }
}


/* INVOICE */
export const INVOICE_VALIDATORS = {
  CRUD_OPERATIONS : new Map<string, CustomFormBuilder>([

    ['id', new CustomFormBuilder(true, [])],
    ['customerId', new CustomFormBuilder(true, [])],
    ['addressId', new CustomFormBuilder(true, [])],
    ['amount', new CustomFormBuilder(false, [Validators.required, Validators.min(0.00)])],
    ['movies', new CustomFormBuilder(true, [])],
  ]),

  CRUD_OPERATIONS_READONLY : new Map<string, CustomFormBuilder>([

    ['id', new CustomFormBuilder(true, [])],
    ['customerId', new CustomFormBuilder(true, [])],
    ['addressId', new CustomFormBuilder(true, [])],
    ['amount', new CustomFormBuilder(false, [Validators.required, Validators.min(0.00)])],
    ['movies', new CustomFormBuilder(true, [])],
  ])
};
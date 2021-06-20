import { Validators } from '@angular/forms';

export class CustomFormBuilder {

    validators: Validators;
    disabled: boolean;

    constructor(required: boolean, validator: Validators) {
        this.validators = validator;
        this.disabled = required;
    }
}


/* ADDRESS */
export const ADDRESS_VALIDATORS = {
  CRUD_OPERATIONS : new Map<string, CustomFormBuilder>([

    ['id', new CustomFormBuilder(true, [])],
    ['streetNb', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(255)])],
    ['address', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(255)])],
    ['postal', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(7)])],
    ['city', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(255)])],
    ['type', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(80)])]
  ]),

  CRUD_OPERATIONS_READONLY : new Map<string, CustomFormBuilder>([

    ['id', new CustomFormBuilder(true, [])],
    ['streetNb', new CustomFormBuilder(true, [])],
    ['address', new CustomFormBuilder(true, [])],
    ['postal', new CustomFormBuilder(true, [])],
    ['city', new CustomFormBuilder(true, [])],
    ['type', new CustomFormBuilder(true, [])]
  ])
};

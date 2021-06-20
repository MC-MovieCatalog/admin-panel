import { Validators } from '@angular/forms';

export class CustomFormBuilder {

    validators: Validators;
    disabled: boolean;

    constructor(required: boolean, validator: Validators) {
        this.validators = validator;
        this.disabled = required;
    }
}

/* USER */
export const USER_VALIDATORS = {
  CRUD_OPERATIONS : new Map<string, CustomFormBuilder>([

    ['id', new CustomFormBuilder(true, [])],
    ['lastName', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(80)])],
    ['firstName', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(80)])],
    ['email', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(180)])],
    ['isVerified', new CustomFormBuilder(false, [])],
    ['isActive', new CustomFormBuilder(false, [])],
    ['password', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(255)])],
    ['agreeTerms', new CustomFormBuilder(false, [])]
  ]),

  CRUD_OPERATIONS_READONLY : new Map<string, CustomFormBuilder>([

    ['id', new CustomFormBuilder(true, [])],
    ['lastName', new CustomFormBuilder(true, [])],
    ['firstName', new CustomFormBuilder(true, [])],
    ['email', new CustomFormBuilder(true, [])],
    // ['roles', new CustomFormBuilder(false, [Validators.required])],
    ['isVerified', new CustomFormBuilder(true, [])],
    ['isActive', new CustomFormBuilder(true, [])],
    ['password', new CustomFormBuilder(true, [])],
    ['agreeTerms', new CustomFormBuilder(true, [])]
  ])
};

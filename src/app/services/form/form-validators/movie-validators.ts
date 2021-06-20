import { Validators } from '@angular/forms';

export class CustomFormBuilder {

    validators: Validators;
    disabled: boolean;

    constructor(required: boolean, validator: Validators) {
        this.validators = validator;
        this.disabled = required;
    }
}


/* MOVIES */
export const MOVIE_VALIDATORS = {
    CRUD_OPERATIONS : new Map<string, CustomFormBuilder>([

      ['id', new CustomFormBuilder(true, [])],
      ['duration', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(255)])],
      ['link', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(255)])],
      ['description', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(255)])],
      ['title', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(80)])],
      ['price', new CustomFormBuilder(false, [Validators.required, Validators.min(0.00)])],
      ['cover', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(255)])],
      ['director', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(255)])],
      ['trailer', new CustomFormBuilder(false, [Validators.required, Validators.maxLength(255)])],
      ['slug', new CustomFormBuilder(false, [Validators.maxLength(255)])],
    ]),

    CRUD_OPERATIONS_READONLY : new Map<string, CustomFormBuilder>([
  
      ['id', new CustomFormBuilder(true, [])],
      ['duration', new CustomFormBuilder(true, [])],
      ['link', new CustomFormBuilder(true, [])],
      ['description', new CustomFormBuilder(true, [])],
      ['title', new CustomFormBuilder(true, [])],
      ['price', new CustomFormBuilder(true, [])],
      ['cover', new CustomFormBuilder(true, [])],
      ['createdAt', new CustomFormBuilder(true, [])],
      ['director', new CustomFormBuilder(true, [])],
      ['trailer', new CustomFormBuilder(true, [])],
      ['slug', new CustomFormBuilder(true, [])],
    ])
    
};

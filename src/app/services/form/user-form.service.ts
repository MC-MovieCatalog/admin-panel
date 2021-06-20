import { UserModel } from '../../shared/models/user.model';
import { CustomFormBuilder, USER_VALIDATORS } from './form-validators/user-validators';
import { UserService } from '../models/user.service';

import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class UserFormComponentService {

    constructor(
        protected router: Router,
        protected toastrService: ToastrService,
        private userService: UserService
    ) {
    }

    /* USER FORM */
    public getUserForm(user: UserModel, userValidators: Map<string, CustomFormBuilder>): FormGroup {
        const userForm = new FormGroup({});
        for (const [fieldName, _] of userValidators.entries()) {
          if (fieldName !== 'addresses' && fieldName !== 'roles') {
            const control = new FormControl({ value: user[fieldName], disabled: userValidators.get(fieldName).disabled }, userValidators.get(fieldName).validators);
            userForm.addControl(fieldName, control);
          } else {
            // Throw erreur
          }
        }
        return userForm;
    }

    getCRUDUserCreateFormGroup(): FormGroup {
        const user: UserModel = new UserModel();
        const userAddForm = this.getUserForm(user, USER_VALIDATORS.CRUD_OPERATIONS);
        return userAddForm;
    }

    getCRUDUpdateUserFormGroup(user: UserModel): FormGroup {
        const userUpdateForm = this.getUserForm(user, USER_VALIDATORS.CRUD_OPERATIONS);
        return userUpdateForm;
    }

    getCRUDReadUserFormGroup(user: UserModel): FormGroup {
        const userReadForm = this.getUserForm(user, USER_VALIDATORS.CRUD_OPERATIONS_READONLY);
        return userReadForm;
    }

    saveUser(user: UserModel): Observable<UserModel> {

        return this.userService.save(user).pipe(tap(userSaved => {
            this.toastrService.success('L\'utilisateur a été enregistré avec succès !');
        }, (error: ErrorEvent) => {
            this.userService.getErrorLoad(error);
          })
        );
    }

    updateUser(user: UserModel): Observable<UserModel> {

        return this.userService.update(user.id, user).pipe(tap(userUpd => {
            this.toastrService.success('les informations de l\'utilisateur ont été mis à jour avec succès !');
        }, (error: ErrorEvent) => {
            this.userService.getErrorLoad(error);
          })
        );
    }
}

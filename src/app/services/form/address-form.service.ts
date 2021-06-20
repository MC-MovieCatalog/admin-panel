import { CustomFormBuilder, ADDRESS_VALIDATORS } from './form-validators/address-validators';
import { AddressService } from '../models/address.service';
import { AddressModel } from '../../shared/models/address.model';

import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class AddressFormComponentsService {

    constructor(
        protected router: Router,
        protected toastrService: ToastrService,
        private addressService: AddressService
    ) {
    }

    /* ADDRESS FORM */
    public getAddressForm(address: AddressModel, addressValidators: Map<string, CustomFormBuilder>): FormGroup {
        const addressForm = new FormGroup({});
        for (const [fieldName, _] of addressValidators.entries()) {
            const control = new FormControl({ value: address[fieldName], disabled: addressValidators.get(fieldName).disabled }, addressValidators.get(fieldName).validators);
            addressForm.addControl(fieldName, control);
        }
        return addressForm;
    }

    getCRUDAddressCreateFormGroup(): FormGroup {
        const address: AddressModel = new AddressModel();
        const addressAddForm = this.getAddressForm(address, ADDRESS_VALIDATORS.CRUD_OPERATIONS);
        return addressAddForm;
    }

    getCRUDUpdateAddressFormGroup(address: AddressModel): FormGroup {
        const addressUpdateForm = this.getAddressForm(address, ADDRESS_VALIDATORS.CRUD_OPERATIONS);
        return addressUpdateForm;
    }

    getCRUDReadAddressFormGroup(address: AddressModel): FormGroup {
        const addressReadForm = this.getAddressForm(address, ADDRESS_VALIDATORS.CRUD_OPERATIONS_READONLY);
        return addressReadForm;
    }

    saveAddress(address: AddressModel): Observable<AddressModel> {

        return this.addressService.save(address).pipe(tap(addressSaved => {
            this.toastrService.success('L\'adresse a été correctement enregistré pour l\'utilisateur !');
        }, (error: ErrorEvent) => {
            this.addressService.getErrorLoad(error);
          })
        );
    }

    updateAddress(address: AddressModel): Observable<AddressModel> {

        return this.addressService.update(address.id, address).pipe(tap(addressUpd => {
            this.toastrService.success('L\'adresse de l\'utilisateur a été correctement mis à jour !');
        }, (error: ErrorEvent) => {
            this.addressService.getErrorLoad(error);
          })
        );
    }
    
}

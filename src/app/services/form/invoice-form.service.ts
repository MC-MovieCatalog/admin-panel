import { UserModel } from '../../shared/models/user.model';
import { CustomFormBuilder, INVOICE_VALIDATORS } from './form-validators/invoice-validators';
import { MovieModel } from '../../shared/models/movie.model';
import { InvoiceModel } from 'src/app/shared/models/invoice.model';
import { AddressModel } from '../../shared/models/address.model';

import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from '../models/invoice.service';


export class InvoiceFormData {
    users: UserModel[] = [];
    addresses: AddressModel[] = [];
    movies: MovieModel[] = [];
}

@Injectable()
export class InvoiceFormComponentsService {

    constructor(
        protected router: Router,
        protected toastrService: ToastrService,
        private invoiceService: InvoiceService
    ) {
    }

    public getInvoiceForm(invoice: InvoiceModel, invoiceValidators: Map<string, CustomFormBuilder>): FormGroup {
        const invoiceForm = new FormGroup({});
        for (const [fieldName, _] of invoiceValidators.entries()) {
            if (fieldName !== 'movies') {
                const control = new FormControl({ value: invoice[fieldName], disabled: invoiceValidators.get(fieldName).disabled }, invoiceValidators.get(fieldName).validators);
                invoiceForm.addControl(fieldName, control);
            } else {
                // Throw error...
            }
        }

        return invoiceForm;
    }

    getCRUDInvoiceFormGroup(): FormGroup {
        const invocieForm = this.getInvoiceForm(new InvoiceModel(), INVOICE_VALIDATORS.CRUD_OPERATIONS);
        return invocieForm;
    }

    getCRUDUpdateInvoiceFormGroup(invoice: InvoiceModel): FormGroup {
        const invoiceUpdateForm = this.getInvoiceForm(invoice, INVOICE_VALIDATORS.CRUD_OPERATIONS);
        return invoiceUpdateForm;
    }

    getCRUDReadInvoiceFormGroup(invoice: InvoiceModel): FormGroup {
        const invoiceReadForm = this.getInvoiceForm(invoice, INVOICE_VALIDATORS.CRUD_OPERATIONS_READONLY);
        return invoiceReadForm;
    }

    saveInvoice(invoice: InvoiceModel): Observable<InvoiceModel> {

        return this.invoiceService.save(invoice).pipe(tap(invoiceSaved => {
            this.toastrService.success('La facture a été enregistrée avec succès !');
        }, (error: ErrorEvent) => {
            this.invoiceService.getErrorLoad(error);
          })
        );
    }

    updateInvoice(invoice: InvoiceModel): Observable<InvoiceModel> {

        return this.invoiceService.update(invoice.id, invoice).pipe(tap(invoiceUpd => {
            this.toastrService.success('La facture a été mis à jour avec succès !');
        }, (error: ErrorEvent) => {
            this.invoiceService.getErrorLoad(error);
          })
        );
    }
}

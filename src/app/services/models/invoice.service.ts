import { API_DEFAULT_PATHS } from './../default-paths/api-default-paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { GenericCrudService } from '../basic-crud/generic.crud.service';
import { InvoiceModel } from './../../shared/models/invoice.model';

@Injectable()
export class InvoiceService extends GenericCrudService<InvoiceModel> {
    constructor(http: HttpClient,
                protected toastrService: ToastrService) {
        super(http, toastrService, API_DEFAULT_PATHS.ROUTE_INVOICE);
  }
}

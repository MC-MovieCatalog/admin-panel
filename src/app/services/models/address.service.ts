import { API_DEFAULT_PATHS } from '../default-paths/api-default-paths';
import { AddressModel } from '../../shared/models/address.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { GenericCrudService } from '../basic-crud/generic.crud.service';

@Injectable()
export class AddressService extends GenericCrudService<AddressModel> {
    constructor(http: HttpClient,
                protected toastrService: ToastrService) {
        super(http, toastrService, API_DEFAULT_PATHS.ROUTE_ADDRESS);
  }
}

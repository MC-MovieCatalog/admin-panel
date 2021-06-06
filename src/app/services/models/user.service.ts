import { UserModel } from './../../shared/models/user.model';
import { API_DEFAULT_PATHS } from './../default-paths/api-default-paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GenericCrudService } from '../basic-crud/generic.crud.service';

@Injectable()
export class UserService extends GenericCrudService<UserModel> {
    constructor(http: HttpClient,
                protected toastrService: ToastrService) {
        super(http, toastrService, API_DEFAULT_PATHS.ROUTE_USER);
  }
}

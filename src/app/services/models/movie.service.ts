import { MovieModel } from './../../shared/models/movie.model';
import { API_DEFAULT_PATHS } from './../default-paths/api-default-paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GenericCrudService } from '../basic-crud/generic.crud.service';

@Injectable()
export class MovieService extends GenericCrudService<MovieModel> {
    constructor(http: HttpClient,
                protected toastrService: ToastrService) {
        super(http, toastrService, API_DEFAULT_PATHS.ROUTE_MOVIE);
  }
}

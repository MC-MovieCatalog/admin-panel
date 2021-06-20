import { StateService } from '../state-app.service';
import { CustomFormBuilder, MOVIE_VALIDATORS } from './form-validators/movie-validators';
import { MovieService } from '../models/movie.service';
import { MovieModel } from '../../shared/models/movie.model';

import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class MovieFormComponentsService {

    constructor(
        protected router: Router,
        protected toastrService: ToastrService,
        private movieService: MovieService,
        private appStateService: StateService
    ) {
    }

    /* MOVIE FORM */
    public getMovieForm(movie: MovieModel, movieValidators: Map<string, CustomFormBuilder>): FormGroup {
        const movieForm = new FormGroup({});
        for (const [fieldName, _] of movieValidators.entries()) {
            const control = new FormControl({ value: movie[fieldName], disabled: movieValidators.get(fieldName).disabled }, movieValidators.get(fieldName).validators);
            movieForm.addControl(fieldName, control);
        }
        return movieForm;
    }

    getCRUDMovieFormGroup(): FormGroup {
        const movie: MovieModel = new MovieModel();
        const movieAddForm = this.getMovieForm(movie, MOVIE_VALIDATORS.CRUD_OPERATIONS);
        return movieAddForm;
    }

    getCRUDUpdateMovieFormGroup(movie: MovieModel): FormGroup {
        const movieUpdateForm = this.getMovieForm(movie, MOVIE_VALIDATORS.CRUD_OPERATIONS);
        return movieUpdateForm;
    }

    getCRUDReadMovieFormGroup(movie: MovieModel): FormGroup {
        const movieReadForm = this.getMovieForm(movie, MOVIE_VALIDATORS.CRUD_OPERATIONS_READONLY);
        return movieReadForm;
    }

    saveMovie(movie: MovieModel): Observable<MovieModel> {

        return this.movieService.save(movie).pipe(tap(movieSaved => {
            this.toastrService.success('Le film a été enregistré avec succès !');
        }, (error: ErrorEvent) => {
            this.movieService.getErrorLoad(error);
          })
        );
    }

    updateMovie(movie: MovieModel): Observable<MovieModel> {

        return this.movieService.update(movie.id, movie).pipe(tap(movieUpd => {
            this.toastrService.success('Le film a été mis à jour avec succès !');
        }, (error: ErrorEvent) => {
            this.movieService.getErrorLoad(error);
          })
        );
    }
    
}

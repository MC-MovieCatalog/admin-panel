import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieFormComponentsService } from 'src/app/services/form/movie-form.service';
import { MovieService } from 'src/app/services/models/movie.service';
import { MovieModel } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-display-edit-movie',
  templateUrl: './display-edit-movie.component.html',
  styleUrls: ['./display-edit-movie.component.scss']
})
export class DisplayEditMovieComponent implements OnInit {

  movie: MovieModel = new MovieModel();
  movieId: number;
  movieFormEdit: FormGroup;
  observableMovie = new BehaviorSubject<MovieModel>(null);
  loading: boolean = false;
  isReadOnly: boolean = false;
  currentUrl: any;

  constructor(
    private router: Router,
    private movieFormComponentsService: MovieFormComponentsService,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private pageTitle: Title,
    public sanitizer: DomSanitizer
  ) {
    this.movieId = null;
    this.pageTitle.setTitle('Edition film');

    this.ifMovieIdExists();
    this.getMovieIfIdExists();
  }

  ngOnInit(): void {
    this.getRouteAction();
  }

  getMovieById(movieId: number): Observable<MovieModel> {
    return this.movieService.get(movieId);
  }

  getRouteAction() {
    this.currentUrl = this.router.url;
    if (this.currentUrl === '/films/details-film/' + this.movieId) {
      this.isReadOnly = true;
    }
  }

  ifMovieIdExists(): void {
    this.loading = true;
    console.log('load : ', this.loading);
    if (this.route.params !== undefined) {
      this.route.params.subscribe((params: any) => {
        if (params.id !== undefined) {
          this.movieId = params.id;
          
          this.movieService.get(params.id).subscribe((movie: MovieModel) => {
            if (this.isReadOnly) {
              this.movieFormEdit = this.movieFormComponentsService.getCRUDReadMovieFormGroup(movie);
            } else {
              this.movieFormEdit = this.movieFormComponentsService.getCRUDUpdateMovieFormGroup(movie);
            }

            this.loading = false;
          }, (error: ErrorEvent) => {
            this.router.navigate(['/page-introuvable']);
            throw new Error('Cette ressource n\'existe pas').message;
          });
        }
      });
    }
  }

  getMovieIfIdExists(): void {

    if (this.movieId) {
      this.getMovieById(this.movieId).subscribe((movie: MovieModel) => {
        if (movie) {

          this.movie = Object.assign({}, movie);
          if (this.isReadOnly) {
            this.pageTitle.setTitle('Détails du film : ' + this.movie.title);
          } else {
            this.pageTitle.setTitle('Edition du film : ' + this.movie.title);
          }

          this.observableMovie.next(movie);
          
          this.movieFormEdit.patchValue(this.movie);
        }
      });
    }

  }

  updateMovie(): void {
    this.loading = true;
    this.setSlugToMovie();
    this.movieFormComponentsService.updateMovie(this.movie).subscribe((data: any) => {
      this.movie = data;
      this.loading = false;
      this.router.navigate(['/films/details-film/' + this.movieId]);
    }, (error: ErrorEvent) => {
      this.loading = false;
    })
  }

  setSlugToMovie(): void {
    this.movie = this.movieFormEdit.getRawValue();
    this.movie.slug = this.movieFormEdit.controls.slug.value;
  }

}

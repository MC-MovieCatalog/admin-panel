import { MovieService } from './../../../services/models/movie.service';
import { MovieModel } from './../../../shared/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconComponentService } from 'src/app/services/icon.component.service';
import { movieMock } from '../../../shared/mocks/movie/movie-mock';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {

  // movies = movieMock;

  movies: MovieModel[] = [];
  loading: boolean;

  constructor(
    public iconService: IconComponentService,
    public sanitizer: DomSanitizer,
    private movieService: MovieService,
    private toastrService: ToastrService

  ) {
    this.loading = false;
  }


  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.loading = true;
    this.movieService.getAll().subscribe((movies: MovieModel[]) => {
      if (movies) {
        this.movies = movies;
        this.movieService.getSuccessLoad();
        this.loading = false;
      }
    }, (error: ErrorEvent) => {
      console.log('error :', error);
      this.movieService.getErrorLoad(error);
      this.loading = false;
    })
  }

  deleteMovie(movieId: number) {
    
    this.loading = true;
    this.movieService.delete(movieId).subscribe((result) => {
      if (result) {
        this.toastrService.success('Le film a été supprimé avec succès !');
        this.ngOnInit();
      }
    }, (error: ErrorEvent) => {
      this.movieService.getErrorLoad(error);
      this.loading = false;
    })
  }
}

import { MovieService } from './../../../services/models/movie.service';
import { MovieModel } from './../../../shared/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconComponentService } from 'src/app/services/icon.component.service';
import { movieMock } from '../../../shared/mocks/movie/movie-mock';
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
    private movieService: MovieService

  ) {
    this.loading = false;
  }


  ngOnInit(): void {
    this.getAllMovies();
    // this.toastrService.success('Chargement des films terminé', 'Succes :');
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
}

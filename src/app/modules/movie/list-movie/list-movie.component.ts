import { Component, OnInit } from '@angular/core';
import { movieMock } from '../../../shared/mocks/movie/movie-mock';
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  movies = movieMock;
  constructor() { }

  ngOnInit(): void {
    console.log('movies :', this.movies);
  }

}

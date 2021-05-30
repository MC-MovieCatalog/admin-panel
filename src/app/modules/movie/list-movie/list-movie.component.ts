import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconComponentService } from 'src/app/services/icon.component.service';
import { movieMock } from '../../../shared/mocks/movie/movie-mock';
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  movies = movieMock;

  constructor(
    public iconService: IconComponentService,
    public sanitizer: DomSanitizer
  ) { }


  ngOnInit(): void {
    console.log('movies :', this.movies);
  }

}

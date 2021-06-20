import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MovieFormComponentsService } from 'src/app/services/form/movie-form.service';
import { MovieModel } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {

  movieForm: FormGroup;
  movie: MovieModel = new MovieModel();
  observableMovie = new BehaviorSubject<MovieModel>(new MovieModel());
  loading: boolean;
  
  constructor(
    private movieFormComponentsService: MovieFormComponentsService,
    private router: Router
  ) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.movieForm = this.movieFormComponentsService.getCRUDMovieFormGroup();
    this.movieForm.patchValue(this.movie);
    this.observableMovie.next(this.movie);
  }


  onCreateMovie(): void {
    this.loading = true;
    this.setSlugToMovie();

    this.movieFormComponentsService.saveMovie(this.movie).subscribe((data: any) => {
      this.movie = data.result;
      this.router.navigate(['/films-details' + this.movie.id]);
    }, (error: ErrorEvent) => {
      this.loading = false;
    })
  }

  setSlugToMovie(): void {
    this.movie = this.movieForm.getRawValue();
    this.movie.slug = this.movieForm.controls.slug.value;
  }

}

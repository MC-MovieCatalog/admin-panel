import { MovieModel } from '../../models/movie.model';
import { moviesData } from './movies';

const movies: MovieModel[] = [];

for (const movieItem of moviesData) {
    const movie = new MovieModel();

    movie.id = movieItem.id;
    movie.duration = movieItem.duration;
    movie.link = movieItem.link;
    movie.description = movieItem.description;
    movie.title = movieItem.title;
    movie.price = movieItem.price;
    movie.cover = movieItem.cover;
    movie.director = movieItem.director;
    movie.trailer = movieItem.trailer;
    movie.slug = movieItem.slug;

    movies.push(movie);
}

export const movieMock = movies;

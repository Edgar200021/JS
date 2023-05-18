'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

const lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', ''),
  movieRating = +prompt('На сколько оцените его?', ''),
  lastWatchedMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
  movieRating2 = +prompt('На сколько оцените его?', '')

personalMovieDB['movies'][lastWatchedMovie] = movieRating
personalMovieDB['movies'][lastWatchedMovie2] = movieRating2

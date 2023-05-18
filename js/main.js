'use strict'

let numberOfFilms

function start() {
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '').trim()
  while (
    numberOfFilms === '' ||
    numberOfFilms === null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '').trim()
  }
}

start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastWatchedMovie = prompt(
        'Один из последних просмотренных фильмов?',
        ''
      ).trim(),
      movieRating = prompt('На сколько оцените его?', '').trim()

    if (
      lastWatchedMovie !== '' &&
      lastWatchedMovie !== null &&
      lastWatchedMovie.length < 50 &&
      movieRating !== '' &&
      movieRating !== null
    ) {
      personalMovieDB['movies'][lastWatchedMovie] = +movieRating
    } else {
      console.log('error')
      i--
    }
  }
}

rememberMyFilms()

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено давольно мало фильмов')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель')
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман')
  } else {
    alert('Произошла ошибка')
  }
}

detectPersonalLevel()

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB)
  }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`,
      ''
    ).trim()
  }
}

writeYourGenres()

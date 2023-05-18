'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

top: for (let i = 0; i < 2; i++) {
  let lastWatchedMovie = prompt('Один из последних просмотренных фильмов?',''),
    movieRating = prompt('На сколько оцените его?', '')

	if (lastWatchedMovie !== '' && lastWatchedMovie !== null && lastWatchedMovie.length < 50 && movieRating !== '' && movieRating !== null ) {
		personalMovieDB['movies'][lastWatchedMovie] = +movieRating
	} else {
		console.log('error')
		i--
	}

}


if (personalMovieDB.count < 10) {
	alert('Просмотрено давольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert("Вы классический зритель")
} else if (personalMovieDB.count >= 30) {
	alert('Вы киноман')
} else {
	alert('Произошла ошибка')
}



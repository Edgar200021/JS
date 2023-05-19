'use strict'


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

personalMovieDB.start = function () {
  this.count = prompt('Сколько фильмов вы уже посмотрели?', '').trim()
  while (
    this.count === '' ||
    this.count === null ||
    isNaN(this.count)
  ) {
    this.count = prompt('Сколько фильмов вы уже посмотрели?', '').trim()
  }
}

personalMovieDB.rememberMyFilms = function () {
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

personalMovieDB.detectPersonalLevel = function () {
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

personalMovieDB.showMyDB = function (hidden) {
  if (!hidden) {
    console.log(personalMovieDB)
  }
}

personalMovieDB.writeYourGenres = function () {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`, '')
    if (genre !== null && genre !== '') {
      personalMovieDB.genres[i - 1] = genre.trim()
    } else {
      i--
    }
  }

  personalMovieDB.genres.forEach((item, i) => {
    console.log(`Любимый жанр ${i + 1} - это ${item}`)
  })
}
personalMovieDB.start()
personalMovieDB.rememberMyFilms()
personalMovieDB.detectPersonalLevel()
personalMovieDB.showMyDB(personalMovieDB.privat)
personalMovieDB.writeYourGenres()

personalMovieDB.toggleVisibleMyDB = function () {
	if (personalMovieDB.privat) {
		personalMovieDB.privat = false
	} else {
		personalMovieDB.privat = true
	}
}


"use strict";
const numberOfFilms = prompt("How many movies have you seen?");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

const fMovie = prompt("What was your last movie ?"),
      fMark = prompt("What score do you give it ?"),
      sMovie = prompt("What was your last movie ?"),
      sMark = prompt("What score do you give it ?");


personalMovieDB.movies[fMovie] = fMark;
personalMovieDB.movies[sMovie] = sMark;
    
console.log(personalMovieDB.movies);
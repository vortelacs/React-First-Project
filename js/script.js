"use strict";
const numberOfFilms = prompt("How many movies have you seen?");
let personalMovieDB = {
    count: numberOfFilms,
    movies:null,
    actors:null,
    genres:null,
    privat:false
}

const fMovie = prompt("What was your last movie ?")
const fMark = prompt("What score do you give it ?")
const sMovie = prompt("What was your last movie ?")
const sMark = prompt("What score do you give it ?")

const movies={
    'fMovie' : 'fMark',
    'sMovie' : 'sMark'
}
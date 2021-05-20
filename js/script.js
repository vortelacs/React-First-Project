"use strict";
const numberOfFilms = prompt("How many movies have you seen?");
if (numberOfFilms <= 10 && numberOfFilms > 0) { alert("Not so much"); }
else if (numberOfFilms < 30 && numberOfFilms > 10) { alert("OK"); }
else if (numberOfFilms >= 30) { alert("Pretty much"); }
else { alert("Error"); }

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let mark;
    const movie = prompt("What was your last movie ?");
    if(movie.length < 2 || movie.length > 50){
        i--;
        continue;
    }
    do{
        mark = prompt("What score do you give it ?");
    }
    while(mark.length < 2);

    personalMovieDB.movies[movie] = mark;
}
console.log(personalMovieDB.movies);
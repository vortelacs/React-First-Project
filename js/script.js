"use strict";

let numberOfFilms;
start();

function start() {
    do{
        numberOfFilms = prompt("How many movies have you seen?");
    }while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

writeYourGenres();

function detectPersonalLevel(){

    if (numberOfFilms <= 10 && numberOfFilms > 0) { alert("Not so much"); }
    else if (numberOfFilms < 30 && numberOfFilms > 10) { alert("OK"); }
    else if (numberOfFilms >= 30) { alert("Pretty much"); }
    else { alert("Error"); }  
}

function showMyDB(hidden) {
    if (hidden != false) { console.log(personalMovieDB); }
}


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genre;
        do {
            genre = prompt("What are your favorites genres");
        }
        while (genre.length < 2);
        personalMovieDB.genres[i] = genre;
    }
}

function rememberMyMovies(){}


for (let i = 0; i < 2; i++) {
    let mark;
    const movie = prompt("What was your last movie ?");
    if (movie.length < 2 || movie.length > 50) {
        i--;
        continue;
    }
    do {
        mark = prompt("What score do you give it ?");
    }
    while (mark.length < 1);

    personalMovieDB.movies[movie] = mark;
}
console.log(personalMovieDB);
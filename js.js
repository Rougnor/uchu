"use strict";
function showMyDB(obj) {
    if (obj.private != false) {
        console.log('Error');
    } else {
        console.log(obj);
    }
}

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

function watIsFilms() {
    for (let i = 0; i < 2; i++) {
        let watFilm = prompt('Какой фильм вы смотрели недавно?', ''),
            watGreidFilm = prompt('Как вы его оцениваете?(0 до 5)', '');
        if (watFilm != null && watGreidFilm != null && watFilm != '' && watGreidFilm != '' && watFilm.length < 50) {
            personalMoveDB.movies[watFilm] = watGreidFilm;
            console.log('done');
        }
        else {
            console.log('Error');
            i--;
        }
    }
}

function watIsYourLevel(){
    if (personalMoveDB.count < 10) {
        alert('Вы смотрели мало фильмов');
    } else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
        alert('Вы простой зритель');
    } else if (personalMoveDB.count >= 30) {
        alert('Вы киноман!');
    }
    else {
        alert('Произошла ошибка');
    }
}

function writeYourGenres(){
    for(let i=1; i<=3; i++){
        personalMoveDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
    }
}

let numberOfFilms;

start();

const personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

watIsFilms();
watIsYourLevel();
writeYourGenres();
showMyDB(personalMoveDB);
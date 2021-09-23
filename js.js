"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', 'Введите число..');

const personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let a = 0;
while (a !== 2) {
    let watFilm = prompt('Какой фильм вы смотрели недавно?', 'Название....');
    let watGreidFilm = +prompt('Как вы его оцениваете?(0 до 5)', '5');
    a++;
    personalMoveDB.movies[watFilm] = watGreidFilm;
}

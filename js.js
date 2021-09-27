"use strict";

const personalMoveDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    private: false,
    showMyDB() {
        if (this.private != false) {
            console.log('Error');
        } else {
            console.log(this);
        }
    },
    start() {
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
            this.count = numberOfFilms;
            this.start();
        }
    },
    watIsFilms() {
        for (let i = 0; i < 2; i++) {
            let watFilm = prompt('Какой фильм вы смотрели недавно?', ''),
                watGreidFilm = prompt('Как вы его оцениваете?(0 до 5)', '');
            if (watFilm != null && watGreidFilm != null && watFilm != '' && watGreidFilm != '' && watFilm.length < 50) {
                this.movies[watFilm] = watGreidFilm;
                console.log('done');
            }
            else {
                console.log('Error');
                i--;
            }
        }
    },
    watIsYourLevel() {
        if (this.count < 10) {
            alert('Вы смотрели мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            alert('Вы простой зритель');
        } else if (this.count >= 30) {
            alert('Вы киноман!');
        }
        else {
            alert('Произошла ошибка');
        }
    },
    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            let otv = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if(otv == '' || otv == null){
                i--;
            }else{
                this.genres[i - 1] = otv;
            }
        }
        this.genres.forEach((item,i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}"`);
        });
    },
    toggleVisibleMyDB() {
        if(this.private){
            this.private = false;
        }else{
            this.private = true;
        }
    },


};
personalMoveDB.start();
personalMoveDB.watIsFilms();
personalMoveDB.watIsYourLevel();
personalMoveDB.writeYourGenres();
personalMoveDB.showMyDB();
personalMoveDB.toggleVisibleMyDB();









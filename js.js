"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    const personalMoveDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };
    console.log(personalMoveDB.count);
    console.log(typeof(personalMoveDB.count));
    

   
    for(let i = 0; i < 2; i++){
        let watFilm = prompt('Какой фильм вы смотрели недавно?', ''),
        watGreidFilm = prompt('Как вы его оцениваете?(0 до 5)', '');
        if(watFilm != null && watGreidFilm != null && watFilm != '' && watGreidFilm != '' && watFilm.length < 50){
            personalMoveDB.movies[watFilm] = watGreidFilm;
            console.log('done');
        }
        else{
            console.log('Error');
            i--;
        }   
    }
    if(personalMoveDB.count < 10){
        alert('Вы смотрели мало фильмов');
    }else if(personalMoveDB.count >= 10 && personalMoveDB.count < 30){
        alert('Вы простой зритель');
    }else if(personalMoveDB.count >= 30){
        alert('Вы киноман!');
    }
    else{
        alert ('Произошла ошибка');
    }
    
    console.log(personalMoveDB);


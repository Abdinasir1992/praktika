"use strict"; // - эта директива показывет что мы будем использовать новый вариант записи кода

/* задача на практический урок №3:
1) первую часть урока повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать  на вопрос 
"Ваш любимый жанр под номером $(номер по порядку)". Каждый ответ записывается в массив данных genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*Старый код:
const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;*/



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--; 
        }
        
    }
}

rememberMyFilms();

/*Другой вариант работы с циклом:
let question = 0;
while (question < 2) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его?', '');
          question++;
    if (a != null && b != null && a != '' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        
    } else {
        console.log('error');
        question--; 
    }
}*/



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

//Задание 2:
function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i=1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();

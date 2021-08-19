"use strict"; // - эта директива показывет что мы будем использовать новый вариант записи кода
/* задача на урок:
1) автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ 
или ввести название фильма длинее чем 50 символов.
если это происходит - вовзвращем пользователя к вопросам опять (К любой строке можно обратиться как
str.length - и получить её длину)
3) При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести
сообщение "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Проищошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

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

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB); 
"use strict"; // - эта директива показывет что мы будем использовать новый вариант записи кода

const category = "toys";

//console.log('https://someurl.com/'+category); //- Старый вариант итерполяции, т.е. соединения фрагментов

//Ниже приведен новый вариант интерполяции. Пример 1:
console.log(`https://someurl.com/${category}/5`);
//пример 2:
const user = "Ivan";
alert (`Привет, ${user}`);
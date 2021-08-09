"use strict"; // - эта директива показывет что мы будем использовать новый вариант записи кода

let number = 4.6;

console.log(4/0); //выведет Infinity - бесконечность
console.log('string'*9); //выведет NaN - not a number

const persone = "Alex"; // - если данные в кавычках это строчный тип данных

//логический тип данных:

const bool = true;
const bool2 = false;

//специфические данные это когда выводится null, undefined - то есть значение пустое:

//Объекты:

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name); //-Получение данных из массива. После названия массива указывается свойство которое нужно вывести
console.log(obj['name']);

let arr = ['plum.jpg', 'orange.jpg', 6, 'apple.bmp']; //значение каждого идет согласно порядковому номеру. Начинается с 0
console.log(arr[1]);

// `` - Обратная коавычка позволяют нам встраивать выражения в строку, заключая их в ${…}
let name = "Ilya";
    alert( `hello ${1}` ); // выведет "Hello 1"
    alert( `hello ${"name"}` ); // выведет "Hello name" 
    alert( `hello ${name}` ); // выведет "Hello Ilya"


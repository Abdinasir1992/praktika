"use strict"; // - эта директива показывет что мы будем использовать новый вариант записи кода

function showFirstMessage() { // внутри кргулых скобок можно указать аргумент
    console.log("Hello World");
}

showFirstMessage();

//Вариант использования функции с аргументом:
function showSecondMessage(text) {
    console.log(text);
}

showSecondMessage("Hello World");

//Созданная внутри функции переменная будет действовать только внутри функции:
/* function showThirdMessage(text) {
    console.log(text);
    let num = 20;
}

showThirdMessage("Hello World");
console.log(num); - вызовит ошибку в консоли, т.к. переменная num локальна*/

let num = 20; 

function showThirdMessage(text) {
    console.log(text);
    num = 10;
}

showThirdMessage("Hello World");
console.log(num); //вызовет 10 в консоли т.к. num объявлено глобально и внутри функции ему присваивается новая переменная

/*
let num = 20 

function showThirdMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num); - здесь он выведет то что внутри функции, если предыдущая строка объявления переменной не будет 
                        то выведет глобальную переменную
}

showThirdMessage("Hello World");
console.log(num);
в консоли выведется Hello World, 10, 20. 
*/

function calc(a,b) {
    return (a + b); //заканчивает действие функции и возвращает его значение. Если после нее будут операции то они не выполнятся
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 5));

function ret() {
    let num = 50;
    // здесь может быть куча операций
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

/* классификация функций:
function declaration - это классический вид объявления функции. Данный вид функции можно вызвать до того как функция объявлена:
function foo() {
    код
}

function expression(здесь после закрывающей фигурной скобки обязательна наличие точки с запятой) 
- вызывается только после объявления функции:
let foo = function() {
    код
};

*/

const logger = function() {
    console.log('Hello');
}; 

logger();

// стрелочная функция (стандарт ES6):
const calc2 = (a, b) => a + b; // после стрелки идет выполняемый код, который можно заключить также в фигурные скобки

/*
let sum = (a, b) => a + b;

Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};


alert( sum(1, 2) ); - выведет 3
*/
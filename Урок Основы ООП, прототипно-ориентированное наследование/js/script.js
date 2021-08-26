"use strict"; // - эта директива показывет что мы будем использовать новый вариант записи кода

let  str = "some";
let strObj = new String(str); //данная ф-ция создает строку,но в JS если мы реализуем метод на строке то он это видит как объект 

console.log(typeof(str)); // выдаст string
console.log(typeof(strObj));//выдаст object
//когда применяем какой-то метод над примитивной строкой, то JS преобразовывает его в объект а затем обратно в строку

//Прототипно-ориентированное наследование:
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = {
    health: 100
};
// Задача: необхлжимо чтобы возможности и характеристики john были такими же что и у soldier

//устаревший способ(неиспользуется):
// john.__proto__ = soldier;

// новый метод унаследования:
Object.setPrototypeOf(john, soldier);


console.log(john); // выведет john только со свойством health
console.log(john.armor); // выведет значение armor благодоря прототипу

john.sayHello(); //выведет Hello унаследуя у объекта soldier


// Также можно использовать метод без создания объекта который должен унаследовать:
const john2 = Object.create(soldier);//создан объект john2 чтобы унаследоваться от soldier

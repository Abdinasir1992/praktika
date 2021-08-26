"use strict"; // - эта директива показывет что мы будем использовать новый вариант записи кода

let a = 5,
    b = a;

b = b + 5;

console.log(b); // выведет 10
console.log(a); // выведет 5

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // передается ссылка,  
copy.a = 10;// изменяя copy изменятся и obj

console.log(copy); 
console.log(obj);
/*вышеуказанные коды выведят абсолютна одинаковые объекты с измененным значением,
это происходит потому что при подобном работе с объектными данными все они работают как ссылка */

// как можно передать не ссылку, а копию объекта: 
function copy2(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
} 

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy2(numbers);// здесь создана уже копия

newNumbers.a = 10; //модифицируем свойство а нашей копии
newNumbers.c.x = 10; // в данном случае значение изменится на 10 и в копии объекта и в неизменном объекте. 
                    /*т.к. мы использовали поверхностное клонирование, то если внутри объекта есть вложенный объект, 
                    она буть иметь ссылочный вид*/

console.log(newNumbers); //выведет измененный скопированный объект
console.log(numbers); // выведет неизмененный объект

// способ 2 object assign позволяет соединить между собой несколько объектов:

const add = {
    d: 17,
    e: 20
}; //сединим объект add и numbers

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);// создание копии объекта add

clone.d = 20;

console.log(add);
console.log(clone);

// Рассмотрим методы копирования, модификации массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();// создали копию массива
/* const newArray = oldArray; - создана ссылка*/

console.log(newArray);
console.log(oldArray);

// стандарты ES6, ES8. Операция разворота (spread - оператор):
const video = ['yotube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];// с помощью spread оператора соединяем оъекты и добавляем свои данные
      
console.log(internet);

//Пример посложнее:
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(... num);

// еще один способ создания поверхностных копий:

const array =  ["a", "b"];

const newArray2 = [...array]; // создана копия массива array

//spread оператор в объектах:
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};// создана копия массива
    




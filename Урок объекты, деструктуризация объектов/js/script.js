"use strict"; // - эта директива показывет что мы будем использовать новый вариант записи кода

const obj = new Object(); //Это менее распространенный метод создания объекта. обычно объект создают с помощью фигурных скобок

const options = {
    name: 'test', 
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

//обращение к значениям объекта можно через точку или квадратные скобки:
console.log(options.name);

//Если нужно удалить свойство или значение то нужно применить:

/*delete options.name;

console.log(options);*/

//Чтобы перебрать все свойства(значения) объекта нужно использовать for in:
for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
} // данный код не переберет объект который есть внутри объекта т.е. объект colors не переберется
//Для этого нужно реализовать перебор внутри перебора:
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    
}

//разберем какие свойства имеет объект, н-р сколько свойств в объекте:

let counter = 0;

/*
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
    
}

console.log(counter);
*/

//есть другой метод подсчета свойств:
//console.log(Object.keys(options));-выдает какие св-ва есть ввиде массива,а чтобы опр-ть кол-во свойств объекта добавляем length:
console.log(Object.keys(options).length); // выдает количество свойств в объекте

// Методы можно создавать в ручную, для этого делаем следующее, водим новое свойство в ввиде функции:

const options2 = {
    name: 'test', 
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //новое свойство
        console.log("Test");
    }
};

options2.makeTest();

//Деструктуризация объекта ES6:
/*чтобы получить значение свойства объекта внутри объекта можно использовать следующий код, но он не удобен в использовании:
console.log(options2["colors"]["border"]);*/

const {border, bg} = options2.colors; // это структура является деструктуризацией, т.е. вытаскивает объект из объекта отдельно
// указывается какие свойства нужно отделить и после = указывается из какого объекта нужно деструктурировать
console.log(border);


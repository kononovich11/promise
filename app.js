/*
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/

const styles = ['Джаз', 'Блюз']; // Джаз, Блюз
styles.push('Рок-н-ролл'); // Джаз, Блюз, Рок-н-ролл
for (let i = 0; i < styles.length; i++) {
    let middle = Math.floor(styles.length / 2);
    if (i == middle) {
        styles[i] = 'Классика'; // Джаз, Классика, Рок-н-ролл
    }
}
const firstElementOfArray = styles.shift();
styles.unshift('Рэп', 'Регги');
// Рэп, Регги, Классика, Рок-н-ролл

/*
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput() {
    let arr = [];
    let addingElement = prompt('Enter value:', '');
    while (isFinite(addingElement)) {
        if (addingElement == null || addingElement == '') {
            return arr;
        } else {
            arr.push(addingElement);
            addingElement = prompt('Enter value:', '');
        }
    }

}

console.log(sumInput());

/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/
function camelize(str) {
    return str.split('-').map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
}

// console.log(camelize('-webkit-transition'));

/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
*/
function filterRange(arr, a, b) {
    return arr.filter(item => {
        let filterVal = (a != undefined && b != undefined) ? item >= a && item <= b : arr;
        return filterVal;
    });
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr);
console.log(filtered);

/*
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
*/

function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, index) => {
        (item >= a && item <= b) ? arr : arr.splice(index, 1);
    });
    return arr;
}
let arr1 = [5, 3, 8, 1];
let resValue = filterRangeInPlace(arr1, 1, 3);
console.log(resValue);

/*
let arr = [5, 2, 1, -10, 8];

ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/
let arr2 = [
    5,
    2,
    1,
    -10,
    8
];

arr2.sort(function (a, b) {
    return b - a;
});

/*
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

let arr3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let newArr = [];
    arr.forEach((item, index) => {
        newArr[index] = arr[index];
    });
    return newArr.sort();
}
let sorted = copySorted(arr3);

/*
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

alert( names ); // Вася, Петя, Маша
*/

let vasya = {
    name: "Вася",
    age: 25
};
let petya = {
    name: "Петя",
    age: 30
};
let masha = {
    name: "Маша",
    age: 28
};

let users = [vasya, petya, masha];
let names = users.map(item => item.name);

/*
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

 теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
*/

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

sortByAge(users);

/*
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
*/

function getAverageAge(users) {
    let averageSum = 0;
    users.map(item => {
        averageSum += item.age;
    });
    return averageSum = (averageSum / users.length).toFixed();
}

let averageAge = getAverageAge(users);

/*
Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n  
*/

function getArray(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}

let arrToN = getArray(10);

/*
Создать функцию,которая принимает массив, а возвращает новый массив с дублированными элементами
*/
function doubleArray(arr) {
    let newArr = [];
    newArr = newArr.concat(arr, arr);
    return newArr;
}
let doubleArr = doubleArray([1, 2, 3]);

/* 
Создать функцию,которая принимает произвольное число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений
*/
function changeCollection() {
    let generalArr = [];
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].shift();
        generalArr[i] = arguments[i];
    }
    return generalArr;
}

console.log(changeCollection([
    1, 2, 3
], ['a', 'b', 'c']));

/*
Создать функцию которая принимает массив пользователей, поле которое хочу проверить и значение на которое хочу проверять указанное поле.Возвращать новый массив с пользователями соответствующие указанным параметрам.
*/
const users1 = [
    {
        "_id": "5e36b779dc76fe3db02adc32",
        "balance": "$1,955.65",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Berg Zimmerman",
        "gender": "male"
    }, {
        "_id": "5e36b779d117774176f90e0b",
        "balance": "$3,776.14",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": "Deann Winters",
        "gender": "female"
    }, {
        "_id": "5e36b779daf6e455ec54cf45",
        "balance": "$3,424.84",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Kari Waters",
        "gender": "female"
    }
]


function filterUsers(arr, key, value) {
    let findObjArr = [];
    arr.forEach(item => {
        for (let prop in item) {
            if (prop == key && item[prop] == value) {
                findObjArr = item;
            }
        }
    });
    return findObjArr;
}

console.log(filterUsers(users1, "age", 36));

/*
На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
*/

const array = [
    1,
    2,
    3,
    5,
    8,
    9,
    10
];
const newInfoArr = array.map(element => {
    return [{
            digit: element,
            odd: element % 2 == 0
        }];
});

// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
const arrEx = [
    12,
    4,
    50,
    1,
    0,
    18,
    40
];
const isNull = arrEx.some(element => element === 0);

// Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

const arrayForLen = [
    'yes',
    'hello',
    'no',
    'easycode',
    'what'
];
const moreThreeLetter = arrayForLen.some(element => element.length > 3);

/*
Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
*/

const arrayInfo = [
    {
        char: "a",
        index: 12
    },
    {
        char: "w",
        index: 8
    },
    {
        char: "Y",
        index: 10
    },
    {
        char: "p",
        index: 3
    }, {
        char: "p",
        index: 2
    }, {
        char: "N",
        index: 6
    }, {
        char: " ",
        index: 5
    }, {
        char: "y",
        index: 4
    }, {
        char: "r",
        index: 13
    }, {
        char: "H",
        index: 0
    }, {
        char: "e",
        index: 11
    }, {
        char: "a",
        index: 1
    }, {
        char: " ",
        index: 9
    }, {
        char: "!",
        index: 14
    }, {
        char: "e",
        index: 7
    }
];

function getPhrase(arr) {
    let str = '';
    let sortArray = arrayInfo.sort((a, b) => a.index - b.index);
    sortArray.reduce((prev, item) => str += item['char'], 0);
    return str;
}
console.log(getPhrase(arrayInfo));

/*
Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
*/
let sortArr = [
    [
        14, 45
    ],
    [1],
    [
        'a', 'c', 'd'
    ]
];
sortArr.sort((prev, next) => prev.length - next.length);

/*
Есть массив объектов:
[
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]

Отсортировать их по возрастающему количеству ядер (cores).
*/

let coresArr = [
    {
        cpu: 'intel',
        info: {
            cores: 2,
            сache: 3
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 4,
            сache: 4
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 1,
            сache: 1
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 3,
            сache: 2
        }
    }, {
        cpu: 'amd',
        info: {
            cores: 4,
            сache: 2
        }
    }
];
coresArr.sort((prev, next) => prev['info']['cores'] - next['info']['cores']);

/*
Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
*/
let products = [
    {
        title: 'prod1',
        price: 5.2
    },
    {
        title: 'prod2',
        price: 0.18
    },
    {
        title: 'prod3',
        price: 15
    },
    {
        title: 'prod4',
        price: 25
    }, {
        title: 'prod5',
        price: 18.9
    }, {
        title: 'prod6',
        price: 8
    }, {
        title: 'prod7',
        price: 19
    }, {
        title: 'prod8',
        price: 63
    }
];

function filterCollection(arr, price1, price2) {
    let rangeArr = arr.filter(item => item['price'] >= price1 && item['price'] <= price2).sort((prev, next) => prev['price'] - next['price']);
    return rangeArr;
}

const rangePrice = filterCollection(products, 15, 30);

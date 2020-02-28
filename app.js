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

//console.log(camelize('-webkit-transition'));

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
       (item>=a && item<=b)? arr: arr.splice(index,1);
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
let arr2 = [5, 2, 1, -10, 8];

arr2.sort(function(a,b){
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
    arr.forEach((item,index) => {
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

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
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
    users.sort((a,b) => a.age-b.age);
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

let averageAge =getAverageAge(users);
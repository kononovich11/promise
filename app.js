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

console.log(camelize('-webkit-transition'));

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
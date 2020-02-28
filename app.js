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

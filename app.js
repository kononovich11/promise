/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let newStr = '';
        for (let i = 0; i < maxlength; i++) {
            (i == maxlength - 1) ? newStr += '...' : newStr += str[i];
        }
        return newStr;
    } else {
        return str;
    }
}
let truncateStr = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
console.log(truncateStr);

/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 );
*/

function extractCurrencyValue(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        (isFinite(str[i])) ? newStr += str[i] : i;
    }
    return + newStr;
}

console.log(extractCurrencyValue('$120'));

/*
let string = ‘some test string’;
1. Получить первую и последнюю буквы строки
2. Сделать первую и последнюю буквы в верхнем регистре
3. Найти положение слова ‘string’ в строке
4. Найти положение второго пробела (“вручную” ничего не считать)
5. Получить строку с 5-го символа длиной 4 буквы
6. Получить строку с 5-го по 9-й символы
7. Получить новую строку из исходной путем удаления последних 6-и символов
8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
содержаться текст “2016”
*/

let string = 'some test string';

// 1
let firstLetter = string[0];
let lastLetter = string[string.length - 1];
// 2
firstLetter = firstLetter.toUpperCase();
lastLetter = lastLetter.toUpperCase();
// 3
const positionString = string.indexOf('string');
// 4
const firstGap = string.indexOf(' ');
const secondGap = string.indexOf(' ',firstGap + 1); 
//5
const strSubstr = string.substr(5, 4);
//6
const strSlice = string.slice(5,9);
//7
const newString = string.slice(0,string.length - 6);
//8
const a = 20, b = 16;
const strConcat = a.toString() + b;
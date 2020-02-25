// Получить число pi из Math и округлить его до 2-х знаков после точки
const pi = + (Math.PI).toFixed(2);

// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

const min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
const max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

/*Работа с Math.random:
a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число. */

const randomNumA = + (Math.random() * 10).toFixed(2);
const x = 111;
const randomNumB = + (Math.random() * x).toFixed();

// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

let res = + (0.6 + 0.7).toFixed(1);

// Получить число из строки ‘100$’
let numParse = parseInt('100$');

/*
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/

function readNumber() {
    let enterNum = prompt('enter number:', '');
    if(isFinite(enterNum)){
        return enterNum;
    }
    else if(enterNum === null || enterNum ===''){
        return null;
    }
    else{
        while(!isFinite(enterNum)){
            enterNum = prompt('enter number:', '');
        }
    }
}


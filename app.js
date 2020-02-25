//1. Получить число pi из Math и округлить его до 2-х знаков после точки
const pi = +(Math.PI).toFixed(2);
console.log(pi);

//2.Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

const min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
const max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(min, max);

/*3. Работа с Math.random:
a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число. */

const randomNumA = +(Math.random() * 10).toFixed(2);
const x = 111;
const randomNumB = +(Math.random() * x).toFixed();


/*
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator() {
    this.read = function () {
        this.a = + prompt('Enter a:', '');
        this.b = + prompt('Enter b:', '');
    };
    this.sum = () => this.a + this.b;
    this.mul = () => this.a * this.b;
}

let calculator = new Calculator();
// calculator.read();
// console.log("Sum=" + calculator.sum());
// console.log("Mul=" + calculator.mul());

/*Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода: 
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = () => {
        this.value += + prompt('enter number:', '');
    };
}

let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read()
// console.log(accumulator.value);

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n) {
    let res = n == 1 ? n : n + sumTo(n - 1);
    return res;
}
let averegeSum = sumTo(4);

// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
function factorial(n) {
    let res = n == 1 ? n : n * factorial(n - 1);
    return res;
}
let factorNum = factorial(5);

// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

function sum(a) {
    return function (b) {
        return a + b;
    }
}
let resSum = sum(5)(-3);
console.log(resSum);

/*
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
*/

let arrForFilter = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return item => item>=a && item<=b;   
}

function inArray(arr) {
  return item => arr.includes(item);
}

let resInBetween = arrForFilter.filter(inBetween(3,6));
let resInArray = arrForFilter.filter(inArray([1,2,3]));

//Сортировка по полю
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

function byField(name){
    return (prev, next) => prev[name] > next[name] ? 1: -1;
}

let sortName = users.sort(byField('name'));
/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout */

function printNumbers(from, to) {
    for(let i = from; i<= to; i++) {
       alert(i);
        if(i == to) {
            clearInterval(idInter);
        }
    }
}

function printNumbersSetTimeout(from, to) {
    let count = from;
    alert(count);
    count++;
    count == to? clearInterval(idTimeout) : printNumbersSetTimeout(count, to);
}

//let idInter = setInterval(printNumbers, 1000, 2, 9);
//let idTimeout = setTimeout(printNumbersSetTimeout, 1000, 2, 9);

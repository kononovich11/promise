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

let arrForFilter = [
    1,
    2,
    3,
    4,
    5,
    6,
    7
];

function inBetween(a, b) {
    return item => item >= a && item <= b;
}

function inArray(arr) {
    return item => arr.includes(item);
}

let resInBetween = arrForFilter.filter(inBetween(3, 6));
let resInArray = arrForFilter.filter(inArray([1, 2, 3]));

// Сортировка по полю
let users = [
    {
        name: "John",
        age: 20,
        surname: "Johnson"
    }, {
        name: "Pete",
        age: 18,
        surname: "Peterson"
    }, {
        name: "Ann",
        age: 19,
        surname: "Hathaway"
    }
];

function byField(name) {
    return(prev, next) => prev[name] > next[name] ? 1 : -1;
}

let sortName = users.sort(byField('name'));
/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout */

function printNumbers(from, to) {
    for (let i = from; i <= to; i++) {
        alert(i);
        if (i == to) {
            clearInterval(idInter);
        }
    }
}

function printNumbersSetTimeout(from, to) {
    let count = from;
    alert(count);
    count++;
    count == to ? clearInterval(idTimeout) : printNumbersSetTimeout(count, to);
}

// let idInter = setInterval(printNumbers, 1000, 2, 9);
// let idTimeout = setTimeout(printNumbersSetTimeout, 1000, 2, 9);

const arr = ['den', 'lina', 'nina'];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].length;
}
// console.log(newArr);

let newArr2 = [];
for (let i = 0; i < arr.length; i++) {
    newArr2[i] = arr[i].toUpperCase();
}
// console.log(newArr2);

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

function nameLength(el) {
    return el.length;
}

function nameUpperCase(el) {
    return el.toUpperCase();
}

const res1 = mapArray(arr, nameLength);
const res2 = mapArray(arr, nameUpperCase);

function greeting(firstName) {
    return function (lastName) {
        return `Hi,${firstName} ${lastName}`;
    }
}

const testGreeting = greeting('Galina')('Kononovich');

function question(job) {
    const jobDictionary = {
        developer: 'what is JS?',
        teacher: ' what subject?'
    }

    return function (name) {
        return `${name}, ${
            jobDictionary[job]
        }?`
    };
}

const developerQuestion = question('developer')('Nina');

/*
Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки
*/

function getResultOfHandler(arr, fn) {
    let str = 'New value:';
    for (let i = 0; i < arr.length; i++) {
        str += fn(arr[i]);
    }
    return str;
}

function handler1(el) {
    return el[0].toUpperCase() + el.slice(1);
}

function handler2(el) {
    return `${
        el * 10
    },`;
}

function handler3(el) {
    return `${
        el['name']
    } is ${
        el['age']
    },`;
}

function handler4(el) {
    return el.split('').reverse().join('') + ',';
}

const result1 = getResultOfHandler([
    'my', 'name', 'is', 'Trinity'
], handler1);
const result2 = getResultOfHandler([
    10, 20, 30
], handler2);
const result3 = getResultOfHandler([
    {
        age: 45,
        name: 'Jhon'
    }, {
        age: 20,
        name: 'Aaron'
    }
], handler3);
const result4 = getResultOfHandler([
    'abc', '123'
], handler4);

/*
Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 
*/

function every(arr, fn) {
    if (arr.push && typeof(fn) == 'function') {
        for (let i = 0; i < arr.length; i++) {
            if (! fn(arr[i], i, arr)) {
                return false;
            }
        }
    }
    return true;
}

function checkMore5(el, index, arr) {
    return el > 5 ? true : false;
}

const getResMore5 = every([
    10, 16, 9
], checkMore5);

/*function getThis() {
    console.log(this);
}

getThis();*/
function getPrice(currency = '$') {
    console.log(currency + this.price);
    return this;
}
function getName() {
    console.log(this.name);
    return this;
}

const prod1 = {
    name: 'intel',
    price: 100,
    getPrice,
    getName,
    info: {
        information: ['2ghz'],
        getInfo: function () {
            console.log(this);
        }
    }
};

// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName();

const prod2 = {
    name: 'AMD',
    price: 50,
    getPrice
};

// prod2.getPrice();

// prod2.getName = prod1.getName;
// prod2.getName();

const str = 'This will reverse str';
const reverseStr = str.split('').reverse().join('');

const prod3 = {
    name: 'ARM',
    price: 200,
    getPrice,
    // getName,
};

// getPrice.call(prod3);
// getPrice.apply(prod3, ['*']);
// prod3.getName().getPrice();

const getPriceBind = prod3.getPrice.bind(prod3);
// console.log(getPriceBind);

setTimeout(getPriceBind, 1000);

/*Создать объект, который описывает ширину и высоту

прямоугольника, а также может посчитать площадь фигуры:

const rectangle = {width:..., height:..., getSquare:...}; */

const rectangle = {
    width: 300,
    height: 500,
    getSquare() {
        return this.width * this.height;
    }
};
const square = rectangle.getSquare();

/*Создать объект, у которого будет цена товара и его скидка, а также

два метода: для получения цены и для расчета цены с учетом скидки:

const price = {

price: 10,

discount: '15%',

... };

price.getPrice(); // 10

price.getPriceWithDiscount(); // 8.5*/

const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price;
    },
    getPriceWithDiscount() {
        return this.price -(parseInt(this.discount) * this.price) / 100;
    }
};

const priceWithDiscount = price.getPriceWithDiscount();

/*
Создать объект, у которого будет поле высота и метод “увеличить

высоту на один”. Метод должен возвращать новую высоту:

object.height = 10;

object.inc(); // придумать свое название для метода

object.height; // 11;
*/

const objectHeight = {
    plusOne() {
        return ++ this.height;
    }
};

objectHeight.height = 10;
objectHeight.plusOne();

/*Создать объект “вычислитель”, у которого есть числовое свойство

“значение” и методы “удвоить”, “прибавить один”, “отнять один”.

Методы можно вызывать через точку, образуя цепочку методов:

numerator.double().plusOne().plusOne().minusOne();

numerator.value // 3 */

const numerator = {
    value: 1,
    double() {
        this.value *= 2;
        return this;
    },
    plusOne() {
        ++this.value;
        return this;
    },
    minusOne() {
        --this.value;
        return this;
    }
};

numerator.double().plusOne().plusOne().minusOne();
//console.log(numerator.value);

/*Создать объект с розничной ценой и количеством продуктов.

Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)*/

const products = {
    price: 25,
    amountOfProducts: 6,
    getAllPrice() {
        return this.price * this.amountOfProducts;
    },
};
//console.log(products.getAllPrice());

function getFullName(fname, lname) { // console.log(fname, lname);
    return function () {
        return `${fname} ${lname}`;
    };
}

const getName = getFullName('Peter', 'Ivanov');


function updateValue(val = 0) {
    let x = val;
    return function (num = 0) {
        return x += num
    };
}

const updtVal = updateValue(2);

function checkCred() {
    const login = 'test';
    const password = 'some';

    return {
        checkLogin(value) {
            return login === value;
        },
        checkPassword(value) {
            return password === value;
        }
    };
}

const check = checkCred();

function closureExample() {
    const arrOfFunc = [];
    let value = '';

    for (let i = 0; i < 10; i++) {
        value += i;
        arrOfFunc.push(function () { // console.log(value, i);
        });
    }
    return arrOfFunc;
}

const res = closureExample();
res[9]();

/*Создайте функцию которая бы умела делать:

minus(10)(6); // 4

minus(5)(6); // -1

minus(10)(); // 10

minus()(6); // -6

minus()(); // 0

Подсказка, функция minus должна возвращать другую функцию.*/

function minus(a = 0) {
    return function(b = 0) {
        return a - b;
    };
}

const resM = minus(0)(-6);

/*Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker ...

const multiply = multiplyMaker(2);

multiply(2); // 4 (2 * 2)

multiply(1); // 4 (4 * 1)

multiply(3); // 12 (4 * 3)

multiply(10); // 120 (12 * 10)*/

function multiplyMaker(x = 0) {
    let value = x; 
    return function(num = 0) {
       return value *= num;
    };
}

const multiply = multiplyMaker(2);


/*
Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

func(‘a’, ‘b’, ‘c’, ‘d’) →

{ first: ‘a’, other: [‘b’, ‘c’, ‘d’] }
*/

function getObject(first, ...other) {
    return {first, other};
}

const resault = getObject('a', 'b', 'c', 'd');

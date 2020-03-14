const users = [
    {
        _id: "5cdce6ce338171bb473d2855",
        index: 0,
        isActive: false,
        balance: 2397.64,
        age: 39,
        name: "Lucile Finley",
        gender: "female",
        company: "ZOXY",
        email: "lucilefinley@zoxy.com",
        phone: "+1 (842) 566-3328",
        registered: "2015-07-12T09:39:03 -03:00"
    },
    {
        _id: "5cdce6ce0aa8d071fa4f4cc5",
        index: 1,
        isActive: true,
        balance: 2608.48,
        age: 33,
        name: "Woodward Grimes",
        gender: "male",
        company: "FORTEAN",
        email: "woodwardgrimes@fortean.com",
        phone: "+1 (960) 436-3138",
        registered: "2014-09-08T03:24:39 -03:00"
    },
    {
        _id: "5cdce6ce103de120d32d6fe4",
        index: 2,
        isActive: true,
        balance: 1699.99,
        age: 25,
        name: "Robinson Coleman",
        gender: "male",
        company: "GENMOM",
        email: "robinsoncoleman@genmom.com",
        phone: "+1 (852) 543-3171",
        registered: "2019-04-23T08:24:58 -03:00"
    },
    {
        _id: "5cdce6cebada7a418d8ccb3d",
        index: 3,
        isActive: true,
        balance: 2621.84,
        age: 25,
        name: "Austin Benton",
        gender: "male",
        company: "ZILIDIUM",
        email: "austinbenton@zilidium.com",
        phone: "+1 (977) 573-2627",
        registered: "2016-08-02T10:08:24 -03:00"
    }, {
        _id: "5cdce6ced81fe99596d9cef5",
        index: 4,
        isActive: true,
        balance: 1297.31,
        age: 37,
        name: "Casandra Stout",
        gender: "female",
        company: "ANACHO",
        email: "casandrastout@anacho.com",
        phone: "+1 (929) 465-3804",
        registered: "2018-04-14T11:27:26 -03:00"
    }, {
        _id: "5cdce6ce6c3ae6c4d6f39e88",
        index: 5,
        isActive: false,
        balance: 2165.49,
        age: 20,
        name: "Valencia Carrillo",
        gender: "male",
        company: "XEREX",
        email: "valenciacarrillo@xerex.com",
        phone: "+1 (977) 522-3378",
        registered: "2014-02-14T11:45:27 -02:00"
    }
];

// forEach
// users.forEach(item => console.log(item));

// filter
const userMore25 = users.filter(item => item.age > 25);

// map
const usersName = users.map(item => item.name);

// reduce
const totalBalance = users.reduce((acc, item) => {
    acc += item.balance;
}, 0);

const userObj = users.reduce((acc, item) => {
    acc[item._id] = item;
    return acc;
}, {});

// some/every

const isMale = users.some(item => item.gender == 'male');
const isEveryMale = users.every(item => item.gender == 'male');

// find
const needFind = users.find(item => item.name == 'Valencia Carrillo');

// sort
const sortAge = users.sort((prev, next) => prev.age - next.age);

/*На основе массива [1,2,3,5,8,9,10] сформировать новый массив,

каждый элемент которого будет хранить информацию о числе и его четности:

[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]*/

const numbers = [
    1,
    2,
    3,
    5,
    8,
    9,
    10
];
const numbersObj = numbers.map(item => ({
    digit: item,
    odd: item % 2 == 0
}), {});

// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

const arrNum = [
    12,
    4,
    50,
    1,
    0,
    18,
    40
];
const check0 = arrNum.some(item => item == 0);

// Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true

const arrStrings = [
    'yes',
    'hello',
    'no',
    'easycode',
    'what'
];
const itemLengthMore3 = arrStrings.every(item => item.length > 3);

/*Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

Напишите функцию, которая из элементов массива соберет и вернёт

строку, основываясь на index каждой буквы.*/

const objsOfSymbols = [
    {
        char: "a",
        index: 12
    },
    {
        char: "w",
        index: 8
    },
    {
        char: "Y",
        index: 10
    },
    {
        char: "p",
        index: 3
    }, {
        char: "p",
        index: 2
    }, {
        char: "N",
        index: 6
    }, {
        char: " ",
        index: 5
    }, {
        char: "y",
        index: 4
    }, {
        char: "r",
        index: 13
    }, {
        char: "H",
        index: 0
    }, {
        char: "e",
        index: 11
    }, {
        char: "a",
        index: 1
    }, {
        char: " ",
        index: 9
    }, {
        char: "!",
        index: 14
    }, {
        char: "e",
        index: 7
    }
];

function createPhrase(arr) {
    const sortObjectsSymbols = arr.sort((prev, next) => prev.index - next.index).reduce((acc, item) => {
        acc += item.char;
        return acc;
    }, '');
    return sortObjectsSymbols;
}
const allPhrase = createPhrase(objsOfSymbols);

//Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

const arrayOfArrays = [ [14, 45], [1], ['a', 'c', 'd'] ];
arrayOfArrays.sort((prev, next) => prev.length - next.length);
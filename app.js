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

    for (let i = 0; i< 10; i++) {
        value += i;
        arrOfFunc.push(function() {
          // console.log(value, i);
        });
    }
    return arrOfFunc;
}

const res = closureExample();
res[9]();  
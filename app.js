const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error', 1000);
    });
});

console.log(promise);

promise.then(x => {
    console.log(x);
    return x;
}).then(y => console.log(y)).catch(err => console.log(err));

//Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен. 

function promiseCreator(time, res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res, time);
        });
    });
}

const prom = promiseCreator(500, 'ok');
prom.then(console.log);
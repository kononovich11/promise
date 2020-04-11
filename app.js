const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error', 1000);
    });
});

// console.log(promise);

promise.then(x => {
    console.log(x);
    return x;
}).then(y => console.log(y)).catch(err => console.log(err));

// Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.

function promiseCreator(time, res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res, time);
        });
    });
}

const prom = promiseCreator(500, 'ok');
// prom.then(console.log);

// ajax and promise
function customHttp() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${
                            xhr.status
                        }`, xhr);
                        return;
                    }
                    const responseArr = JSON.parse(xhr.responseText);
                    cb(null, responseArr);
                });

                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${
                        xhr.status
                    }`, xhr);
                });

                xhr.send();
            } catch (error) {
                cb(error);
            }
        },
        posts(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${
                            xhr.status
                        }`, xhr);
                        return;
                    }
                    const responseArr = JSON.parse(xhr.responseText);
                    cb(null, responseArr);
                });

                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${
                        xhr.status
                    }`, xhr);
                });

                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        console.log(key, value);
                    });
                }

                xhr.send(JSON.stringify(body));
            } catch (error) {
                cb(error);
            }
        }
    };
}

const http = customHttp();


function getPost(id) {
    return new Promise((resolve, reject) => {
        http.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
}

function getPostComments(post) {
    const {id} = post;
    return new Promise((resolve, reject) => {
        http.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve({post, comments: res});
        });
    });
}

function getUserCreatedPost(data) {
    const {post: {userId},} = data;
    return new Promise((resolve, reject) => {
        http.get('https://jsonplaceholder.typicode.com/users/1', (err, res) => {
            if (err) {
                reject(err);
            }
            resolve({...data, user: res});
        });
    });
}

getPost(5)
    .then(post => getPostComments(post))
    .then(data => getUserCreatedPost(data))
    .then(fullData => console.log(fullData))
    .catch(err => console.log(err))
    .finally(() => console.log('finaly'));



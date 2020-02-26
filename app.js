/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let newStr = '';
        for (let i = 0; i < maxlength; i++) {
            (i == maxlength - 1) ? newStr += '...' : newStr += str[i];
        }
        return newStr;
    } else {
        return str;
    }
}
let truncateStr = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
console.log(truncateStr);

/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 );
*/

function extractCurrencyValue(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        (isFinite(str[i])) ? newStr += str[i] : i;
    }
    return +newStr;
}

console.log(extractCurrencyValue('$120'));
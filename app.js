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

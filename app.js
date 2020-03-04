// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let newDate = new Date(2012, 1, 20, 03, 12);

//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function  getWeekDay(date) {
  const objDate = {
    0: 'ПН',
    1: 'ВТ',
    2: 'СР',
    3: 'ЧТ',
    4: 'ПТ',
    5: 'СБ',
    6: 'ВС',
  }
  return objDate[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) ); 

/*
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.
*/
let thisDate = new Date(2015, 0, 2);
function getDateAgo(date, days) {
  let differentBetweenDates = date.setDate(date.getDate() - days);
  return date.getDate(differentBetweenDates);
}
console.log( getDateAgo(thisDate, 2) );
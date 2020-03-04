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
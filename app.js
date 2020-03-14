/*
Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

func(‘a’, ‘b’, ‘c’, ‘d’) →

{ first: ‘a’, other: [‘b’, ‘c’, ‘d’] }
*/

function getObject(first, ...other) {
    return {first, other};
}

const resault = getObject('a', 'b', 'c', 'd');

/*
Организовать функцию getInfo, которая принимает объект вида
{ name: ..., info: { employees: [...], partners: [ … ] } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

getInfo(organisation); →

Name: Google

Partners: Microsoft Facebook
*/

const organisation = {  
    name: 'Google',   
    info: { 
      employees: ['Vlad', 'Olga'], 
      partners: ['Microsoft', 'Facebook', 'Xing']   
    } 
  };
   
  function getInfo({
      name = 'Unknown',
      info: {
        partners : [p1, p2] 
      },
     } = {}) 
      {
        console.log(`Name: ${name}, Partners: ${p1}, ${p2}`);
      }
      
  getInfo(organisation);



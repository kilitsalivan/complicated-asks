'use strict';
let lang = prompt('Введите ru или en ?');
if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье.');
} else if (lang === 'en') {
console.log('Sunday, Tuesday, Wednesday, Thursday, Friday, Saturday, Monday');
}

switch (lang) {
case 'ru' :  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье.'); 
break;
case 'en' : console.log(' Sunday, Tuesday, Wednesday, Thursday, Friday, Saturday, Monday ');
break;  
default:
    console.log('не верно');
}

const lang1 =  {
    'en': [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
    'ru': [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
  } ;
  console.log(lang1[lang]);
  
  let  namePerson = prompt('Введите имя Артем или Максим:');
  let age = (namePerson === 'Артем')? console.log('директор'):
   (namePerson === 'Максим')?  console.log ('преподаватель') : 
   console.log('студент');

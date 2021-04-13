'use strict';
const
      
     days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
     month = ['Января' , 'Февраля' , 'Марта' , 'Апреля' , 'Мая' , 'Июня' , 'Июля' , 'Августа' , 'Сентября' , 'Октября' , 'Ноября' , 'Декабря' ],
     now = new Date();
     

const ch = function (hours) {
  
if ((hours >= 5) && (hours <= 20)) {
      return 'часов';
} else if ((hours > 21) && (hours >=2 )&&(hours <= 4))
   {  return 'часа' ; 
} else {
      return 'час';
}
};

const minut = function (min) {
  
      if (( min % 10 >= 5) || ( min % 10 === 0 ))  {
            return 'минут';
      } else if (( min % 10 <= 4) || ( min % 10 >=2 )) {
           return 'минуты';
      }
         else { return 'минута';    
      }       
      };



let str = 'Сегодня ' + days[now.getDay()] +' '+ now.getDate() + ' ' + month[now.getMonth()] + ' ' + now.getFullYear() + ' ' + 'года' 
+ ' ' + now.getHours()+' ' + ch(now.getHours())+' ' + now.getMinutes()+'  '+ minut(now.getMinutes()) ;
let p = document.querySelector('h2');
        p.innerHTML = '  ';
        p.innerHTML += str; 




 let time = setInterval(function() {
    const zero = function(chislo){
            if (chislo < 10 )  {return '0'; 
            }else {return ''; }
      };
      let date = new Date();
      
      document.getElementById('time').innerHTML = ( zero(date.getDate())+date.getDate()+'.'+zero(date.getMonth())+date.getMonth()+'.' + date.getFullYear()+
      '-'+zero(date.getHours())+date.getHours()+'.'+zero(date.getMinutes()) + date.getMinutes()+'.' +zero(date.getSeconds())+ date.getSeconds());
    }, 1000);



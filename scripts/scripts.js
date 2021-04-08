'use strict';
     const isNumber = function(n){
     return !isNaN(parseFloat(n)) && isFinite(n); 
};

const guessNumber = function (){
    let hiddenNumber = 12;
    let figure;
    let attempt = 10;

    const getAsd = function (){
    const getSubtraction = function (){
       attempt -=1;
        if (hiddenNumber < figure){
            alert(`Загаданное число меньше осталось ${attempt} попыток`);
            return getAsd();
       }   
            else 
        if (hiddenNumber > figure) {
           alert(`Загаданное число больше осталось ${attempt} попыток`);
           return getAsd();
       }
           else {figure = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"');
        if (figure){guessNumber(); }
       
       } 
    };
    if (attempt === 0) {
        figure = confirm('Попытки закончились, хотите сыграть еще?'); 
        if (!figure) { guessNumber(); 
                } 
    }
   figure = prompt ('Угадай число от 1 до 100 ');
     if ((figure === null) || (figure === false) ) {
       alert ('Игра окончена');
  }     else
     if (!isNumber(figure)) {
       alert ('Введи число!');  getAsd();
  }    else { getSubtraction();}
      

};
getAsd();
}; 
guessNumber();


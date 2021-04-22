'use strict';

class First {
    hello (){
        console.log("Привет я метод родителя!");
        this.nextMethod () ;
    }
    nextMethod (){
        console.log("Я на следующий метод");
    }
}
const Second = new First(); 
Second.hello();
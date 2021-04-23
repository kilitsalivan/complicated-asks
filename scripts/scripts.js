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
class Second extends First{
   hell (){
    super.hello();
    } 
}
const second = new Second ();
second.hell();
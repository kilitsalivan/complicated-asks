'use strict';
function str (a){
 if (typeof a !== 'string') {
return alert ('Введена не строка');
}
console.log(a);
let b = a.replace(/^\s|\s$/g, '').trim ();
if (b.length>30) {
a = b.substr(0, 30) + '...';
}
return a;
}
let res = str ('                  Привет! Привет! Привет! Привет! Привет! Привет! Привет! Привет! Привет! Привет! Привет! Привет! Привет! Привет!                            ');
console.log(res);
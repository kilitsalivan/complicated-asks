'use strict';
let isNumber = function(n){
return !isNaN(parseFloat(n)) && isFinite(n);
};

let arr = [];
function getNumbers (){
for  (let i = 0; i<7; i++ ){
do { 
arr [i] = prompt('Введите число ?' );
} while ( !isNumber(arr[i] )); 
}
return arr;
} 
arr = getNumbers();
console.log(arr);

arr.forEach((item) => {
if (item.startsWith('2') || item.startsWith('4')) {
console.log(item);
}
});

let p;
for (let i = 1; i<= 100 ; i++ ){
let k = 0; 
 for (let n = 1; n < i+1; n++){
   if ( i % n === 0){
 k +=1; p = n;  
}
}
if (k === 2) {
    console.log(i, `делители- 1 и ${p} `);
}
}
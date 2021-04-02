let num = 266219;
num = String(num);
console.log(typeof num);
num = num.split('');
let ml = 1;
for (let i = 0; i < num.length; i++){
ml = Number(num[i])*ml;
console.log(ml);
}
ml = String(ml);
console.log(typeof ml);
ml = ml.substr(0,2);
console.log(ml);
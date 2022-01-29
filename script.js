"use strict";


let num = 266219;
num = String(num);

let a = 1
let i = 0
while (i < num.length) {

  a = a * num[i];
  i += 1;
}

console.log('Произведение  цифр  числа 266219',a);


let b = a **3
console.log('Результат возведения в степень 3 = '+b);

num = String(b)
console.log('Первые 2 цифры полученного числа - '+ num.slice(0,2));
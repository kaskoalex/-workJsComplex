"use strict";


let flag = 0
let arr = ['41222', '12255556', '26587425', '7852136', '42222222', '2011444', '36587458'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "2" || arr[i][0] === "4") {
    console.log(arr[i]);
    flag++

  }
}
if (flag === 0) {
  console.log("Таких чисел нет")
}



let n = 100
nextPrime:
for (let i = 2; i <= 100; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log(i + " Делители этого числа: 1 и " + i);
}
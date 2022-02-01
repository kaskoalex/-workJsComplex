"use strict";



const stringValidation = function (str) {
  if (typeof str !== typeof str.toString()) {
    alert("Заданный тип данных не является строкой");
  } else {
    str = str.trim();
    if (str.length <31){
      return str
    } else {
      return str=str.slice(0,30)+"..."
    }
  }

}

console.log(stringValidation("0123456789012345678901234567890123456789"))
console.log(stringValidation("     1234567"))
console.log(stringValidation(23456789012))
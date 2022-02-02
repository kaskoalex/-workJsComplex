"use strict";



const stringValidation = function (str) {
  if (typeof str !== 'string') {
    alert("Заданный тип данных не является строкой");
  } else {
    strNew = str.trim();
    if (strNew.length <31){
      return strNew
    } else {
      return strNew.slice(0,30)+"..."
    }
  }

}

console.log(stringValidation("0123456789012345678901234567890123456789"))
console.log(stringValidation("     1234567"))
console.log(stringValidation(23456789012))
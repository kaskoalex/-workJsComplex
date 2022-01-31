"use strict";

//1). Переменная lang может принимать 2 значения: 'ru' 'en'.




let dayArr = [
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],

  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
];

let lang = "en";
// a) через if  -----------------------------

if (lang == "ru") {
  console.log(dayArr[0].toString());

} else if (lang == "en") {
  console.log(dayArr[1].join());

} else {
  console.log("Something went wrong");
}




//b) через switch-case -----------------------

switch (true) {
  case lang == "ru":
    console.log(dayArr[0].toString());
    break

  case lang == "en":
    console.log(dayArr[1].join());
    break

  default:
    console.log("Something went wrong");
}

//c) через многомерный массив без ифов и switch.

let langArr = lang == "ru" ? console.log(dayArr[0].join()) : console.log(dayArr[1].join());

// или

let en = dayArr[1];
let ru = dayArr[0];

let lang1 = en;

console.log(lang1.toString());

//  Или другой вариант:

let dayArr1 = {
  "ru": 'Понедельник, Вторник, Среда, Четвер, Пятница, Суббота, Воскресенье',

  "en": 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
};
console.log(dayArr1[lang]);


//2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

//Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = "Александр"

let inputName1 = namePerson == "Артем" ? console.log("Директор.") : namePerson == "Александр" ? console.log("Преподаватель.") : console.log("Студент.");




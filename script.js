"use strict";

//1). Переменная lang может принимать 2 значения: 'ru' 'en'.




let dayArr = [
  ['ru','en'],

  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],

  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
];

let lang = "en";
// a) через if  -----------------------------

if (lang == "ru") {
  console.log(dayArr[1].toString());

} else if (lang == "en") {
  console.log(dayArr[2].join());

} else {
  console.log("Something went wrong");
}




//b) через switch-case -----------------------

switch (true) {
  case lang == "ru":
    console.log(dayArr[1].toString());
    break

  case lang == "en":
    console.log(dayArr[2].join());
    break

  default:
    console.log("Something went wrong");
}

//c) через многомерный массив без ифов и switch.

let language = dayArr[0].indexOf(lang);
console.log(dayArr[language + 1].join())


//2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

//Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = "Александр"

let inputName1 = namePerson == "Артем" ? console.log("Директор.") : namePerson == "Александр" ? console.log("Преподаватель.") : console.log("Студент.");




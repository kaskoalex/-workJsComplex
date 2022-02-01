"use strict";

//1). Переменная lang может принимать 2 значения: 'ru' 'en'.





let ru=['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

let en=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let dayArr = [ru,en];



let lang = en;
// a) через if  -----------------------------

if (lang == ru) {
  console.log(dayArr[0].toString());

} else if (lang == en) {
  console.log(dayArr[1].toString());

} else {
  console.log("Something went wrong");
}




//b) через switch-case -----------------------

switch (true) {
  case lang == ru:
    console.log(dayArr[0].toString());
    break

  case lang == en:
    console.log(dayArr[1].join());
    break

  default:
    console.log("Something went wrong");
}

//c) через многомерный массив без ифов и switch.



console.log(lang.toString());



//2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

//Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = "Александр"

let inputName1 = namePerson == "Артем" ? console.log("Директор.") : namePerson == "Александр" ? console.log("Преподаватель.") : console.log("Студент.");




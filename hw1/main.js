// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let greeting = 'hello';
let course = 'owu';
let domainName = 'com';
let country = 'ua';
let number1 = 1;
let number2 = 10;
let number3 = -999;
let number4 = 123;
const pi = 3.14;
let number5 = 2.7;
let number6 = 16;
let check1 = true;
let check2 = false;
console.log(greeting);
console.log(course);
console.log(domainName);
console.log(country);
console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(pi);
console.log(number5);
console.log(number6);
console.log(check1);
console.log(check2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Apanovych';
let middleName = 'Anna';
let lastName = 'Ivanivna';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;
console.log(typeof a, typeof b, typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Enter your name:');
let patronymic = prompt('Patronymic:');
let age = prompt("Enter your age:");
 console.log(name, patronymic, age);

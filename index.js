//Задание 10.1.5
let dollarSum = prompt('Enter the amount to exchange');
let rubRate = dollarSum * 58.18;
alert('You can exchange this amount for ' + rubRate + ' rubles');

//задание 1
let x = prompt('Введите число');
x = +x;
alert(typeof x);
if (x % 2 === 0) {
  console.log('Вы ввели четное число')
} else if (x % 1 == 0 && x % 2 != 0) {
  console.log('Вы ввели нечетное число')
} else if (isNaN(x)) {
  console.log('Упс, кажется вы ошиблись')
}

//Задание 2
let a = undefined ;
if (typeof(a) === 'string') {
  console.log('a - строка')
} else if (a % 1 === 0) {
  console.log('a - число')
} else  if (typeof(a) === 'boolean') {
  console.log('a - Boolean')
}  else if (isNaN(a)) {
  console.log('Тип \"a\" не определен')
} else {
  console.log('Тип \"a\" не определен')
}

//задание 3
let string = 'Hello';
function reverseString(string) {
  return string.split('').reverse().join('');
}
console.log(reverseString(string))

//задание 4
let randomNumber = getRandomIntInclusive(0, 100);
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(randomNumber)

//задание 5
let array = ['У', 'меня', 'все','получится', 100500];
alert(array.length);
array.forEach(function(item, index, array) {
  return console.log(item)
});

//Задание 8
let family = new Map([
  ["mother", "salad"],
  ["father", "beer"],
  ["son",    "meat"]
]);
for (let name of family.keys()) {
  console.log('ключ-' + name);
};
for (let food of family.values()) {
  console.log('Значение-' + food);
};
//Есть понимание, что это задание выполнено неверно/не до конца, что необходимо вывести в консоль 3 позиции, а не 6, как в моем случае. Нахожусь на пути решения этой задачи
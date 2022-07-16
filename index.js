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

//Задание 2 НЕВЕРНОЕ
let x = prompt('Введите любое значение');
alert(typeof x);
if (x === 'string') {
  console.log('Вы ввели строку')
} else if (x === 'number') {
  console.log('Вы ввели число')
} else {
  console.log('Упс, кажется вы ошиблись')
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
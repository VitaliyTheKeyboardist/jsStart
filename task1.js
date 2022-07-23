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
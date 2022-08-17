//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
//Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let array = [4, 4, 4, 4, 4];
let result = 0;
for (i = 1; i < array.length; i++) {
  let firstItem = array[0];
  
  if (firstItem === array[i]) {
    result += 1;
  }
}
let answerQuestion = result === array.length - 1 ? true : false;
console.log(answerQuestion)
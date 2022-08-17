let array = ['У', 'меня', 'все','получится', 100500];
alert(array.length);
array.forEach(function(item, index, array) {
  return console.log(item)
});

//Второй вариант решения:
const arr1 = [2, 5, 'anything', 'more', 4, 66];
console.log(arr1.length);
for (i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
};
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
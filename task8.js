//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.

let family = new Map([
    ["mother", "salad"],
    ["father", "beer"],
    ["son",    "meat"]
  ]);
  family.forEach(function(value, key) {
    console.log(`Ключ - ${key}, Значение - ${value}`);
  });

  //Второй вариант решения:

let family1 = new Map([
  ["mother", "salad"],
  ["father", "beer"],
  ["son",    "meat"]
]);
  
for (let pair of family1.entries()) {
  console.log(`Ключ - ${pair[0]}, Значение - ${pair[1]}`)
};
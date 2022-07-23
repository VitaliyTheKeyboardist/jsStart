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
let randomNumber = getRandomIntInclusive(0, 100);
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(randomNumber)
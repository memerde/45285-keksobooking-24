function randomInteger(min, max) {
  if (min < 0 || min >= max) {
    return false;
  }
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

randomInteger(81, 111);


function getRandomFloat(min, max, numberOfDecimalPlaces) {
  if (min < 0 || min >= max) {
    return false;
  }
  const randomNumber = (Math.random() * (max - min + 1)) + min;
  return +randomNumber.toFixed(numberOfDecimalPlaces);
}

getRandomFloat(5, 31, 13);

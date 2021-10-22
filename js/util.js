function getRandom(min, max) {
  if (min < 0 || min >= max) {
    return false;
  }
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

function getRandomFloat(min, max, numberOfDecimalPlaces) {
  if (min < 0 || min >= max) {
    return false;
  }
  const randomNumber = (Math.random() * (max - min + 1)) + min;
  return +randomNumber.toFixed(numberOfDecimalPlaces);
}

const getRandomArray = (data) => {
  const maxLength = data.length;
  const arrayLength = getRandom(1, maxLength);
  const array = [];

  while (array.length < arrayLength) {
    const index = getRandom(0, maxLength - 1);
    const element = data[index];

    if (!array.includes(element)) {
      array.push(element);
    }
  }
  return array;
};

const getRandomArrayElement = (data) => {
  const index = getRandom(0, data.length - 1);

  return data[index];
};

const getAvatar = () => {
  const randomNum = `0${getRandom(1, 10)}`.slice(-2);
  return `img/avatars/user${randomNum}.png`;
};

export {getRandom, getRandomFloat, getRandomArray, getRandomArrayElement, getAvatar};

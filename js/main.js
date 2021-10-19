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

const offer = {
  title: [
    'Дом 1',
    'Дом 2',
    'Дом 3',
    'Дом 4',
    'Дом 5',
    'Дом 6',
    'Дом 7',
    'Дом 8',
    'Дом 9',
    'Дом 10',
  ],
  price: getRandom(10, 100),
  type: [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ],
  rooms: getRandom(1, 4),
  guests: getRandom(0, 5),
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'],
  description: [
    'Тут нормально',
    'Тут не очень',
  ],
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
};

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

const getAvatar = () => {
  const randomNum = `0${getRandom(1, 10)}`.slice(-2);
  return `img/avatars/user${randomNum}.png`;
};

const getFeatures = () => {
  const maxLength = offer.features.length;
  const lengthOfArray = getRandom(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandom(0, maxLength - 1);
    const el = offer.features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
};

const getLocation = () => ({
  lat: getRandomFloat(35.65000, 35.70000, 5),
  lng: getRandomFloat(139.70000, 139.80000, 5),
});

const settleIn = () => ({
  author: getAvatar(),
  title: getRandomArrayElement(offer.title),
  address: `${getLocation().lat }, ${ getLocation().lng}`,
  price: getRandom(10000, 111000),
  type: getRandomArrayElement(offer.type),
  rooms: getRandom(0, 5),
  guests: getRandom(0, 5),
  checkin: getRandomArrayElement(offer.checkin),
  checkout: getRandomArrayElement(offer.checkout),
  features: getFeatures(),
  description: getRandomArrayElement(offer.description),
  photos: getRandomArrayElement(offer.photos),
  location: `${getLocation().lat }, ${ getLocation().lng}`,
});

const similarOffer = Array.from({length: 10}, settleIn);

similarOffer();

import {getRandom, getRandomFloat, getRandomArray, getRandomArrayElement} from './util.js';

const OFFER = {
  TITLE: [
    'Дом',
    'Отель',
  ],
  TYPE: [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ],
  TIME: [
    '12:00',
    '13:00',
    '14:00',
  ],
  FEATURES: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ],
  DESCRIPTION: [
    'Тут нормально',
    'Тут не очень',
  ],
  PHOTOS: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
};

const LOCATION = {
  LAT: {
    MIN: 35.6500,
    MAX: 35.7000,
  },
  LNG: {
    MIN: 139.70000,
    MAX: 139.80000,
  },
};

const getAvatar = () => {
  const randomNum = `0${getRandom(1, 10)}`.slice(-2);
  return `img/avatars/user${randomNum}.png`;
};

const settleIn = () => {
  const randomLat = getRandomFloat(LOCATION.LAT.MIN, LOCATION.LAT.MAX, 5);
  const randomlng = getRandomFloat(LOCATION.LNG.MIN, LOCATION.LNG.MAX, 5);
  return {
    author: getAvatar(),
    title: getRandomArrayElement(OFFER.TITLE),
    address: `${randomLat}, ${randomlng}`,
    price: getRandom(10000, 111000),
    type: getRandomArrayElement(OFFER.TYPE),
    rooms: getRandom(0, 5),
    guests: getRandom(0, 5),
    checkin: getRandomArrayElement(OFFER.TIME),
    checkout: getRandomArrayElement(OFFER.TIME),
    features: getRandomArray( OFFER.FEATURES ),
    description: getRandomArrayElement(OFFER.DESCRIPTION),
    photos: getRandomArray(OFFER.PHOTOS),
    location: `${randomLat}, ${randomlng}`,
  };};

export {settleIn};
